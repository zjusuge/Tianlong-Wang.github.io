import test from 'node:test';
import assert from 'node:assert/strict';
import worker,{extractSelection} from './worker.mjs';
const poems=[{key:'p-test',title:'测试',verse:'第一行\n第二行\n\n第三行'}];
const request=body=>new Request('https://worker.example/',{method:'POST',headers:{Origin:'https://zjusuge.github.io','Content-Type':'application/json'},body:JSON.stringify(body)});
const env=()=>({OPENAI_API_KEY:'test-only',OPENAI_MODEL:'test-model',AI_LIMITER:{limit:async()=>({success:true})},GLOBAL_LIMITER:{limit:async()=>({success:true})}});
test('extracts exact contiguous source lines and rejects bad ranges',()=>{
 assert.deepEqual(extractSelection(poems,{poem:'p-test',line_start:0,line_end:2}),{poem:'p-test',excerpt:'第一行\n第二行'});
 for(const selection of [{poem:'unknown',line_start:0,line_end:1},{poem:'p-test',line_start:-1,line_end:2},{poem:'p-test',line_start:1,line_end:99},{poem:'p-test',line_start:2,line_end:3},{poem:'p-test',line_start:1.5,line_end:3}])assert.throws(()=>extractSelection(poems,selection));
});
test('requires approved origin, secrets and rate limits',async()=>{
 assert.equal((await worker.fetch(new Request('https://worker.example/'),env())).status,403);
 assert.equal((await worker.fetch(request({poem:null}),{})).status,503);
 const limited=env();limited.AI_LIMITER.limit=async()=>({success:false});assert.equal((await worker.fetch(request({poem:null}),limited)).status,429);
});
test('reconstructs model-selected lines rather than trusting generated poetry',async t=>{
 let payload;
 t.mock.method(globalThis,'fetch',async(url,options)=>{
  if(url.includes('library.json'))return Response.json(poems);
  payload=JSON.parse(options.body);
  return Response.json({output:[{content:[{type:'output_text',text:JSON.stringify({poem:'p-test',line_start:0,line_end:2})}]}]});
 });
 const response=await worker.fetch(request({poem:'p-test',mood:'自然'}),env());
 assert.equal(response.status,200);assert.deepEqual(await response.json(),{poem:'p-test',excerpt:'第一行\n第二行',method:'live-ai'});
 assert.equal(payload.store,false);assert.equal(payload.text.format.strict,true);assert.deepEqual(payload.text.format.schema.properties.poem.enum,['p-test']);
});
test('refuses invalid model output and never returns invented text',async t=>{
 t.mock.method(globalThis,'fetch',async url=>url.includes('library.json')?Response.json(poems):Response.json({output:[{content:[{type:'output_text',text:'{"poem":"invented","line_start":0,"line_end":1}'}]}]}));
 assert.equal((await worker.fetch(request({poem:null,mood:''}),env())).status,502);
 assert.equal((await worker.fetch(request({poem:'not-found',mood:''}),env())).status,400);
});
test('rejects unexpected or oversized input',async()=>{
 assert.equal((await worker.fetch(request({poem:null,mood:{instruction:'bad'}}),env())).status,400);
 assert.equal((await worker.fetch(request({poem:null,mood:'x'.repeat(3000)}),env())).status,413);
});
