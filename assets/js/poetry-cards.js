(() => {
  'use strict';
  const $=id=>document.getElementById(id);
  const poems=[...document.querySelectorAll('#card-library article')].map(el=>({key:el.dataset.key,title:el.dataset.title,book:el.dataset.book,form:el.dataset.form,url:el.dataset.url,verse:el.querySelector('pre').textContent}));
  if(!poems.length||!window.PoetryCardRenderer)return;
  const curated=[...document.querySelectorAll('#card-curated pre')].map(el=>({key:el.dataset.key,excerpt:el.textContent}));
  const endpoint=$('card-config').dataset.endpoint;
  let current=poems[0],style='mist',pageIndex=0,rendered=null,valid=true,liveRequest=null,requestNumber=0;
  const pick=list=>list[Math.floor(Math.random()*list.length)];
  const status=text=>{$('card-status').textContent=text;};
  const tidy=s=>s.replace(/\r\n/g,'\n').trim();
  function fillPoems(){const q=$('card-poem-query').value.trim().toLocaleLowerCase();const options=poems.filter(p=>p.title.toLocaleLowerCase().includes(q));$('card-poem').replaceChildren(...options.map(p=>{const o=document.createElement('option');o.value=p.key;o.textContent=`${p.title} · ${p.book}`;return o;}));if(options.some(p=>p.key===current.key))$('card-poem').value=current.key;}
  function invalidateRequest(){requestNumber++;if(liveRequest)liveRequest.abort();liveRequest=null;$('card-draw').disabled=false;}
  function updateControls(){
    $('poem-picker').hidden=$('card-scope').value!=='one';
    const mode=$('card-mode').value;$('live-settings').hidden=mode!=='live';
    const notes={curated:'AI 预先精选、逐字核对的原诗句库；本次点击不调用模型。',random:'从原诗中随机抽取一个段落。',manual:'选择一首诗，再从原文选中文字。',live:'实时模型根据意境选择原诗片段，不改写文字。'};
    $('mode-note').textContent=notes[mode];$('card-draw').textContent=mode==='live'?'请 AI 选一段诗':mode==='manual'?'展开原诗选段':'换一段诗 ↻';
    $('live-note').textContent=endpoint?'实时选句将通过本站后端调用模型。':'实时 AI 尚未接通。现在可使用 AI 预选句库、随机选段或手动选段。';
    $('card-draw').disabled=mode==='live'&&!endpoint;
  }
  function showPoem(poem,excerpt){current=poem;$('card-source').value=poem.verse;$('card-excerpt').value=tidy(excerpt);$('card-source-link').href=poem.url;$('card-source-link').textContent=`阅读《${poem.title}》 ↗`;if([...$('card-poem').options].some(o=>o.value===poem.key))$('card-poem').value=poem.key;pageIndex=0;render();}
  function render(){
    const excerpt=tidy($('card-excerpt').value);
    valid=Boolean(excerpt)&&current.verse.includes(excerpt);
    for(const id of ['card-download','card-share','card-copy','card-print'])$(id).disabled=!valid;
    $('card-excerpt').setAttribute('aria-invalid',String(!valid));
    if(!valid){status('请选取这首诗中连续的一段原文；不要改写或拼接不同位置的诗句。');return;}
    rendered=window.PoetryCardRenderer.render({poem:current,excerpt,style,direction:$('card-direction').value,size:$('card-font').value});
    pageIndex=Math.min(pageIndex,rendered.pages.length-1);paintPage();
    status($('card-direction').value==='vertical'&&!rendered.vertical?'英文诗段使用横排，以保持阅读顺序。':rendered.pages.length>1?`这段诗已完整排成 ${rendered.pages.length} 张，未删减文字。`:'');
  }
  function paintPage(){if(!rendered)return;const source=rendered.pages[pageIndex],canvas=$('poetry-card');canvas.width=source.width;canvas.height=source.height;canvas.getContext('2d').drawImage(source,0,0);canvas.setAttribute('aria-label',`${current.title}，苏格格调，${rendered.theme}，第 ${pageIndex+1} 张。${$('card-excerpt').value}`);$('card-size-label').textContent=`${rendered.theme} · ${source.width} × ${source.height}`;$('card-page-label').textContent=`${pageIndex+1} / ${rendered.pages.length}`;$('card-paging').hidden=rendered.pages.length<2;$('card-prev').disabled=pageIndex===0;$('card-next').disabled=pageIndex===rendered.pages.length-1;}
  async function draw(){
    invalidateRequest();const mode=$('card-mode').value,scope=$('card-scope').value;
    const chosen=scope==='one'?poems.find(p=>p.key===$('card-poem').value):pick(poems);
    if(!chosen){status('没有找到作品，请清空诗题搜索或选择另一首。');return;}
    if(mode==='manual'){$('card-scope').value='one';showPoem(chosen,chosen.verse);$('source-details').open=true;updateControls();return;}
    if(mode==='curated'){
      const candidates=curated.filter(c=>scope==='all'||c.key===chosen.key);
      if(!candidates.length){status('这首诗暂无预选片段，请使用随机选段、手动选段或实时 AI。');return;}
      const item=pick(candidates);showPoem(poems.find(p=>p.key===item.key),item.excerpt);return;
    }
    if(mode==='random'){const stanzas=chosen.verse.split(/\n\s*\n/).filter(s=>s.trim()&&!/^\d{4}[.年/-]/.test(s.trim()));const stanza=pick(stanzas.length?stanzas:[chosen.verse]);const lines=stanza.split('\n');const start=lines.length>6?Math.floor(Math.random()*(lines.length-5)):0;showPoem(chosen,lines.slice(start,start+6).join('\n'));return;}
    if(!endpoint){status('实时 AI 尚未接通，请先选择其他选句方式。');updateControls();return;}
    const ticket=++requestNumber;liveRequest=new AbortController();const timer=setTimeout(()=>liveRequest?.abort(),45000);$('card-draw').disabled=true;status('AI 正在选句…');
    try{
      const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({poem:scope==='one'?chosen.key:null,mood:$('card-mood').value.trim()}),signal:liveRequest.signal});
      const result=await response.json();if(!response.ok)throw new Error(result.error||'实时选句暂不可用');if(ticket!==requestNumber)return;
      const poem=poems.find(p=>p.key===result.poem);if(!poem||typeof result.excerpt!=='string'||!poem.verse.includes(result.excerpt)||(scope==='one'&&poem.key!==chosen.key))throw new Error('返回的片段未通过原诗核对，请重试');
      showPoem(poem,result.excerpt);status('实时 AI 已选句，并通过原文核对。');
    }catch(error){if(ticket===requestNumber)status(error.name==='AbortError'?'本次选句超时，请重试或使用预选句库。':error.message);}
    finally{clearTimeout(timer);if(ticket===requestNumber){liveRequest=null;updateControls();}}
  }
  function shareURL(){const text=tidy($('card-excerpt').value),start=current.verse.indexOf(text);const params=new URLSearchParams({poem:current.key,start:String(start),end:String(start+text.length),style,dir:$('card-direction').value,size:$('card-font').value,page:String(pageIndex)});return new URL('/poetry/cards/',location.origin).href+'#'+params.toString();}
  const fileName=()=>`${current.title.replace(/[<>:"/\\|?*\n]/g,'-')}-${rendered.theme}-${pageIndex+1}.png`;
  const blob=()=>new Promise((resolve,reject)=>$('poetry-card').toBlob(value=>value?resolve(value):reject(new Error('图片导出失败')),'image/png'));
  async function download(){if(!valid)return;const url=URL.createObjectURL(await blob());const a=document.createElement('a');a.href=url;a.download=fileName();a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);status(rendered.pages.length>1?'已下载当前卡片；切换页码可下载其他卡片，打印可一次输出全部。':'卡片已下载。');}
  async function copyLink(){if(!valid)return;try{await navigator.clipboard.writeText(shareURL());status('卡片链接已复制，打开可还原诗句和样式。');}catch{status('请复制此链接：'+shareURL());}}
  async function share(){if(!valid)return;try{const file=new File([await blob()],fileName(),{type:'image/png'});if(navigator.canShare?.({files:[file]})){await navigator.share({files:[file],title:current.title,text:`苏格格调《${current.title}》`});status('已打开系统分享。');}else await copyLink();}catch(error){if(error.name!=='AbortError')status('系统分享暂不可用，请下载图片或复制卡片链接。');}}
  async function print(){if(!valid)return;const target=$('card-print-area');target.replaceChildren();const images=rendered.pages.map(canvas=>{const sheet=document.createElement('div');sheet.className='print-sheet';const img=new Image();img.src=canvas.toDataURL('image/png');img.alt=current.title;sheet.append(img);target.append(sheet);return img;});await Promise.all(images.map(img=>img.decode()));window.print();}
  fillPoems();
  $('card-scope').addEventListener('change',()=>{invalidateRequest();updateControls();});
  $('card-mode').addEventListener('change',()=>{invalidateRequest();if($('card-mode').value==='manual'){$('card-scope').value='one';$('source-details').open=true;}updateControls();});
  $('card-poem-query').addEventListener('input',fillPoems);
  $('card-poem').addEventListener('change',()=>{invalidateRequest();const poem=poems.find(p=>p.key===$('card-poem').value);if(poem)showPoem(poem,poem.verse.split(/\n\s*\n/)[0]);updateControls();});
  $('card-draw').addEventListener('click',draw);
  $('use-selection').addEventListener('click',()=>{invalidateRequest();const source=$('card-source');if(source.selectionStart===source.selectionEnd){status('先在原诗文本框中选中一段文字。');return;}$('card-mode').value='manual';$('card-scope').value='one';showPoem(current,source.value.slice(source.selectionStart,source.selectionEnd));updateControls();});
  $('use-full').addEventListener('click',()=>{invalidateRequest();$('card-mode').value='manual';$('card-scope').value='one';showPoem(current,current.verse);updateControls();});
  $('card-excerpt').addEventListener('input',()=>{invalidateRequest();pageIndex=0;render();updateControls();});
  document.querySelectorAll('#card-styles button').forEach(button=>button.addEventListener('click',()=>{style=button.dataset.style;document.querySelectorAll('#card-styles button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));pageIndex=0;render();}));
  for(const id of ['card-direction','card-font'])$(id).addEventListener('change',()=>{pageIndex=0;render();});
  $('card-prev').addEventListener('click',()=>{pageIndex--;paintPage();});$('card-next').addEventListener('click',()=>{pageIndex++;paintPage();});
  for(const [id,action] of [['card-download',download],['card-copy',copyLink],['card-share',share],['card-print',print]])$(id).addEventListener('click',()=>Promise.resolve(action()).catch(()=>status('操作未完成，请重试。')));
  $('studio').hidden=false;$('studio-fallback').hidden=true;
  function restore(){try{const params=new URLSearchParams(location.hash.slice(1));const poem=poems.find(p=>p.key===params.get('poem'));if(!poem)return false;const start=Number(params.get('start')),end=Number(params.get('end'));if(!Number.isInteger(start)||!Number.isInteger(end)||start<0||end<=start||end>poem.verse.length)return false;style=Object.hasOwn(window.PoetryCardRenderer.themes,params.get('style'))?params.get('style'):'mist';$('card-direction').value=params.get('dir')==='vertical'?'vertical':'horizontal';$('card-font').value=['small','medium','large'].includes(params.get('size'))?params.get('size'):'medium';$('card-scope').value='one';$('card-mode').value='manual';document.querySelectorAll('#card-styles button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.style===style)));showPoem(poem,poem.verse.slice(start,end));pageIndex=Math.max(0,Math.min(Number(params.get('page'))||0,rendered.pages.length-1));paintPage();return true;}catch{return false;}}
  if(!restore()){const item=curated[0];showPoem(poems.find(p=>p.key===item.key),item.excerpt);}updateControls();
  // Redraw once web fonts arrive; export and preview always share the same canvas.
  if(document.fonts)document.fonts.ready.then(()=>render());
})();
