/* One canvas renderer for preview, PNG export and print. All illustration is native vector drawing. */
(() => {
  'use strict';
  const themes = {
    mist: {width:1080,height:1440,bg:'#9387aa',ink:'#fffaf1',muted:'#efe7ef',accent:'#ddd1c7',name:'远山暮紫'},
    moon: {width:1080,height:1440,bg:'#283e51',ink:'#f4efe0',muted:'#d1d9dc',accent:'#dfcda9',name:'海上月明'},
    botanical: {width:1080,height:1440,bg:'#919d80',ink:'#fffdf1',muted:'#eef0df',accent:'#dcdabe',name:'草木笺'},
    paper: {width:1080,height:1440,bg:'#e9e0cf',ink:'#393d34',muted:'#77786a',accent:'#a45841',name:'素纸留白'},
    receipt: {width:840,height:1680,bg:'#fcfaf1',ink:'#303732',muted:'#79796d',accent:'#4f5b50',name:'诗歌小票'},
    bookmark: {width:720,height:1800,bg:'#eeeadd',ink:'#444b41',muted:'#7d8173',accent:'#a34b3c',name:'随身书签'}
  };
  const font = (size, bold=false) => `${bold?'500':'400'} ${size}px "Noto Serif SC", "Songti SC", SimSun, Georgia, serif`;
  function wrap(ctx, text, width) {
    const result=[];
    for(const paragraph of text.split('\n')) {
      if(!paragraph){result.push({text:'',blank:true});continue;}
      const tokens = /[\u3400-\u9fff]/u.test(paragraph) ? Array.from(paragraph) : paragraph.match(/\S+\s*|\s+/gu)||[];
      let line='';
      for(const token of tokens){
        if(ctx.measureText(line+token).width<=width){line+=token;continue;}
        if(line){result.push({text:line.trimEnd()});line='';}
        if(ctx.measureText(token).width<=width){line=token;continue;}
        for(const char of Array.from(token)){if(ctx.measureText(line+char).width>width&&line){result.push({text:line});line='';}line+=char;}
      }
      if(line)result.push({text:line.trimEnd()});
    }
    return result;
  }
  function paginate(lines, room, leading){
    const pages=[];let page=[],used=0;
    for(const line of lines){const step=line.blank?leading*.6:leading;if(used+step>room&&page.length){pages.push(page);page=[];used=0;}page.push(line);used+=step;}
    if(page.length)pages.push(page);return pages.length?pages:[[]];
  }
  function line(ctx,x1,y1,x2,y2,color,width=1){ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke();}
  function background(ctx,t,style){
    const w=t.width,h=t.height;ctx.fillStyle=t.bg;ctx.fillRect(0,0,w,h);
    if(style==='mist'){
      const g=ctx.createLinearGradient(0,0,w,h);g.addColorStop(0,'#a59ab7');g.addColorStop(1,'#7b6e95');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
      for(let layer=0;layer<4;layer++){ctx.beginPath();ctx.moveTo(0,h);for(let x=0;x<=w+20;x+=20){const y=h-210+layer*55-Math.sin(x/180+layer)*58-Math.sin(x/71+layer)*17;ctx.lineTo(x,y);}ctx.lineTo(w,h);ctx.closePath();ctx.fillStyle=['#827895','#716589','#615779','#544b6e'][layer];ctx.globalAlpha=.58;ctx.fill();}ctx.globalAlpha=1;
      ctx.fillStyle='#e5ddd5';ctx.beginPath();ctx.arc(w-118,119,27,0,Math.PI*2);ctx.fill();
    }else if(style==='moon'){
      const g=ctx.createLinearGradient(0,0,0,h);g.addColorStop(0,'#344b5e');g.addColorStop(1,'#172c3e');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
      const glow=ctx.createRadialGradient(w-130,135,8,w-130,135,83);glow.addColorStop(0,'#e7d9b980');glow.addColorStop(1,'#e7d9b900');ctx.fillStyle=glow;ctx.fillRect(w-220,40,180,190);ctx.fillStyle=t.accent;ctx.beginPath();ctx.arc(w-130,135,29,0,7);ctx.fill();
      for(let i=0;i<55;i++){const y=h-205+i*4, spread=15+i*1.7;const center=w*.73+Math.sin(i*2.5)*spread;line(ctx,center-spread,y,center+spread,y,`rgba(216,213,181,${.13+(i%5)*.025})`,1.8);}
      for(let i=0;i<26;i++){ctx.beginPath();for(let x=0;x<=w;x+=15){const y=h-170+i*7+Math.sin(x/80+i)*4;x?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.strokeStyle='#9cbbc014';ctx.stroke();}
    }else if(style==='botanical'){
      for(let stem=0;stem<4;stem++){const ox=w*(.18+stem*.23),oy=h+20,top=h-170-stem%2*90;ctx.beginPath();ctx.moveTo(ox,oy);ctx.quadraticCurveTo(ox-70,top+95,ox+30,top);ctx.strokeStyle='#42553d65';ctx.lineWidth=3;ctx.stroke();for(let j=0;j<5;j++){const y=top+35+j*35,x=ox+15-j*10;for(const sign of [-1,1]){ctx.save();ctx.translate(x,y);ctx.rotate(sign*.7);ctx.beginPath();ctx.ellipse(sign*20,-5,30,11,0,0,7);ctx.fillStyle='#43573e3d';ctx.fill();ctx.restore();}}}
      ctx.strokeStyle='#e9edd14d';ctx.strokeRect(35,35,w-70,h-70);
    }else if(style==='paper'){
      ctx.fillStyle='#f2ecdf';ctx.shadowColor='#8a80652b';ctx.shadowBlur=30;ctx.shadowOffsetY=12;ctx.fillRect(50,55,w-100,h-110);ctx.shadowColor='transparent';ctx.strokeStyle='#d2c8b5';ctx.strokeRect(74,79,w-148,h-158);
      for(let i=0;i<900;i++){const x=(i*137.37)%w,y=(i*73.11)%h;ctx.fillStyle='#95856909';ctx.fillRect(x,y,1.3,1.3);}
    }else if(style==='receipt'){
      ctx.fillStyle='#e3e0d5';for(let i=0;i<w;i+=28){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i+14,18);ctx.lineTo(i+28,0);ctx.fill();ctx.beginPath();ctx.moveTo(i,h);ctx.lineTo(i+14,h-18);ctx.lineTo(i+28,h);ctx.fill();}ctx.setLineDash([6,10]);line(ctx,65,165,w-65,165,t.muted);line(ctx,65,h-240,w-65,h-240,t.muted);ctx.setLineDash([]);
      for(let i=0;i<70;i++){ctx.fillStyle=t.ink;ctx.fillRect(180+i*7,h-99,1+(i%4),35);}
    }else if(style==='bookmark'){
      ctx.fillStyle=t.accent;ctx.fillRect(w/2-3,0,6,135);ctx.beginPath();ctx.arc(w/2,145,12,0,7);ctx.fill();line(ctx,42,40,42,h-40,'#cac6b4');line(ctx,w-42,40,w-42,h-40,'#cac6b4');
      ctx.strokeStyle='#bac4b65e';for(let i=0;i<4;i++){ctx.beginPath();ctx.ellipse(w*.72,h-180,130+i*35,70+i*25,-.4,0,7);ctx.stroke();}
    }
  }
  function render({poem,excerpt,style='mist',direction='horizontal',size='medium'}){
    const t={...(themes[style]||themes.mist)},w=t.width;
    let h=t.height;
    const measure=document.createElement('canvas').getContext('2d');
    const base=style==='bookmark'?35:style==='receipt'?38:47;
    const bodySize=base*({small:.84,medium:1,large:1.2}[size]||1);
    const margin=style==='bookmark'?80:style==='receipt'?75:100;
    const textWidth=w-margin*2;
    let titleSize=style==='bookmark'?43:style==='receipt'?47:58;
    measure.font=font(titleSize,true);let titleLines=wrap(measure,poem.title,textWidth-10);
    while(titleLines.length>3&&titleSize>28){titleSize-=2;measure.font=font(titleSize,true);titleLines=wrap(measure,poem.title,textWidth-10);}
    const titleTop=style==='bookmark'?240:style==='receipt'?225:220;
    const top=titleTop+titleLines.length*titleSize*1.55+65;
    measure.font=font(bodySize);
    const vertical=direction==='vertical'&&!/[A-Za-z]{3}/.test(excerpt);
    let chunks,leading=bodySize*1.85;
    // Classical couplets breathe better as individual five- or seven-character lines.
    const clauses=excerpt.split(/(?<=[，。！？；])/u).map(s=>s.trim()).filter(Boolean);
    const classical=clauses.length>1&&clauses.every(s=>/^[\u3400-\u9fff]{5}[^\u3400-\u9fff]$|^[\u3400-\u9fff]{7}[^\u3400-\u9fff]$/u.test(s));
    const displayText=classical?clauses.join('\n'):excerpt;
    const rows=wrap(measure,displayText,textWidth);
    if(style==='receipt'&&!vertical){h=Math.ceil(Math.min(h,Math.max(860,top+rows.reduce((n,r)=>n+(r.blank?.6:1)*leading,0)+340)));t.height=h;}
    const bottom=h-(style==='bookmark'?330:style==='receipt'?285:330);
    if(vertical){
      const charsPerColumn=Math.max(1,Math.floor((bottom-top)/(bodySize*1.45)));
      const columns=[];for(const paragraph of displayText.split('\n')){if(!paragraph){columns.push('');continue;}const chars=Array.from(paragraph);for(let i=0;i<chars.length;i+=charsPerColumn)columns.push(chars.slice(i,i+charsPerColumn).join(''));}
      const capacity=Math.max(1,Math.floor(textWidth/(bodySize*1.85)));chunks=[];for(let i=0;i<columns.length;i+=capacity)chunks.push(columns.slice(i,i+capacity));
    }else chunks=paginate(rows,Math.max(leading,bottom-top),leading);
    const pages=chunks.map((chunk,index)=>{
      const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;const ctx=canvas.getContext('2d');background(ctx,t,style);ctx.textBaseline='top';
      ctx.fillStyle=t.muted;ctx.font=font(style==='bookmark'?21:24);ctx.fillText(style==='receipt'?'POETRY RECEIPT / 诗歌小票':'苏格格调 · 诗与时间',margin,style==='bookmark'?190:95);
      ctx.fillStyle=t.ink;ctx.font=font(titleSize,true);titleLines.forEach((row,i)=>ctx.fillText(row.text,margin,titleTop+i*titleSize*1.55));
      ctx.font=font(bodySize);ctx.fillStyle=t.ink;
      if(vertical){chunk.forEach((column,i)=>{const x=w-margin-bodySize-i*bodySize*1.85;Array.from(column).forEach((char,j)=>{const glyph={'，':'︐','。':'︒','：':'︓','；':'︔','！':'︕','？':'︖'}[char]||char;ctx.fillText(glyph,x,top+j*bodySize*1.45);});});}
      else {const used=chunk.reduce((n,r)=>n+(r.blank?.6:1)*leading,0);let y=top+Math.max(0,bottom-top-used)*.38;chunk.forEach(row=>{if(!row.blank)ctx.fillText(row.text,margin,y);y+=row.blank?leading*.6:leading;});}
      const footer=h-(style==='receipt'?210:270);ctx.font=font(style==='bookmark'?22:25);ctx.fillStyle=t.muted;ctx.fillText('— 苏格格调',margin,footer);ctx.font=font(style==='bookmark'?19:21);ctx.fillText(`《${poem.book}》${poem.book==='苏格未来'?'（暂名）':''}`,margin,footer+45);ctx.fillText('zjusuge.github.io',margin,footer+85);
      if(chunks.length>1){ctx.textAlign='right';ctx.fillText(`${index+1} / ${chunks.length}`,w-margin,footer+85);ctx.textAlign='left';}
      if(style==='paper'||style==='bookmark'){ctx.strokeStyle=t.accent;ctx.strokeRect(w-margin-42,footer,40,46);ctx.fillStyle=t.accent;ctx.font=font(27);ctx.fillText('苏',w-margin-35,footer+6);}
      return canvas;
    });
    return {pages,width:w,height:h,vertical,theme:t.name};
  }
  window.PoetryCardRenderer={render,themes};
})();
