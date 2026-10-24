(()=>{
 const intro=document.getElementById('welcome'),enter=document.getElementById('enter-portfolio');
 const key='harsha-portfolio-entered';
 let entered=false;
 try{entered=sessionStorage.getItem(key)==='1'}catch{}
 if(entered||!intro||typeof intro.showModal!=='function')return;
 let closing=false;
 function finish(){
  intro.close();document.body.classList.remove('intro-open');
  document.body.classList.add('portfolio-arriving');
  document.getElementById('portfolio-name')?.focus({preventScroll:true});
  document.removeEventListener('keydown',onEnter);
  setTimeout(()=>document.body.classList.remove('portfolio-arriving'),600);
 }
 function explore(){
  if(closing)return;closing=true;
  try{sessionStorage.setItem(key,'1')}catch{}
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){finish();return}
  intro.classList.add('welcome-leaving');
  setTimeout(finish,350);
 }
 function onEnter(event){if(event.key==='Escape'){event.preventDefault();return}if(event.key==='Enter'&&!event.isComposing){event.preventDefault();explore()}}
 enter.addEventListener('click',explore);
 intro.addEventListener('cancel',event=>event.preventDefault());
 document.addEventListener('keydown',onEnter);
 try{intro.showModal();document.body.classList.add('intro-open')}catch{document.removeEventListener('keydown',onEnter);intro.close();document.body.classList.remove('intro-open')}
})();
