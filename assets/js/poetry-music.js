(() => {
  'use strict';
  const audio=document.getElementById('poetry-audio');
  if(!audio)return;
  const $=id=>document.getElementById(id),play=$('music-play'),panel=$('music-panel'),volume=$('music-volume'),seek=$('music-seek');
  const key='suge-poetry-music-v1';let saved={},loading=false;
  try{saved=JSON.parse(sessionStorage.getItem(key)||'{}')||{};}catch{}
  audio.volume=Number.isFinite(saved.volume)?Math.min(1,Math.max(0,saved.volume)):.25;volume.value=audio.volume;
  const clock=n=>`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,'0')}`;
  function store(){try{sessionStorage.setItem(key,JSON.stringify({src:audio.getAttribute('src'),time:audio.currentTime,volume:audio.volume}));}catch{}}
  function update(){play.setAttribute('aria-pressed',String(!audio.paused));$('music-icon').textContent=audio.paused?'♫':'Ⅱ';$('music-label').textContent=audio.paused?'听一会儿':'暂停音乐';}
  function progress(){const duration=Number.isFinite(audio.duration)?audio.duration:0;seek.disabled=!duration;seek.max=duration||100;seek.value=audio.currentTime;$('music-time').textContent=clock(audio.currentTime)+(duration?' / '+clock(duration):'');}
  audio.addEventListener('loadedmetadata',()=>{if(saved.src===audio.getAttribute('src')&&Number.isFinite(saved.time)&&saved.time>0&&saved.time<audio.duration)audio.currentTime=saved.time;saved={};progress();});
  audio.addEventListener('timeupdate',progress);
  audio.addEventListener('play',update);audio.addEventListener('pause',()=>{update();store();});
  audio.addEventListener('error',()=>{$('music-status').textContent='音乐暂时未能加载，请稍后重试。';update();});
  play.addEventListener('click',async()=>{if(loading)return;if(!audio.paused){audio.pause();return;}loading=true;play.disabled=true;$('music-status').textContent='';try{await audio.play();}catch{$('music-status').textContent='音乐暂时未能播放，请再点一次。';}finally{loading=false;play.disabled=false;update();}});
  volume.addEventListener('input',()=>{audio.volume=Number(volume.value);store();});
  seek.addEventListener('input',()=>{if(Number.isFinite(audio.duration)){audio.currentTime=Number(seek.value);progress();store();}});
  const expand=$('music-expand');function close(){panel.hidden=true;expand.setAttribute('aria-expanded','false');expand.setAttribute('aria-label','展开音乐设置');}
  expand.addEventListener('click',()=>{panel.hidden=!panel.hidden;expand.setAttribute('aria-expanded',String(!panel.hidden));expand.setAttribute('aria-label',panel.hidden?'展开音乐设置':'收起音乐设置');});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){close();expand.focus();}});
  document.addEventListener('click',e=>{if(!e.target.closest('.poetry-music'))close();});
  window.addEventListener('pagehide',store);
  audio.hidden=true;document.querySelector('.music-controls').hidden=false;
  // A new page always waits for a click; only position and volume are remembered.
  update();
})();
