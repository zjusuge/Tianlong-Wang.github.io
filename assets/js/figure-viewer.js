(() => {
 const dialog=document.getElementById('figure-dialog');
 if(!dialog||typeof dialog.showModal!=='function')return;
 const image=dialog.querySelector('img'),caption=dialog.querySelector('p');
 document.querySelectorAll('.figure-zoom').forEach(link=>link.addEventListener('click',event=>{
  if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
  event.preventDefault();image.src=link.href;image.alt=link.querySelector('img').alt;
  caption.textContent=link.dataset.figureCaption;dialog.showModal();
 }));
 dialog.querySelector('button').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close()});
})();
