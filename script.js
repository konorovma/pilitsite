const hd=document.getElementById('hd'),b=document.getElementById('burger');
b.addEventListener('click',()=>{const o=hd.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{hd.classList.remove('open');b.setAttribute('aria-expanded',false)}));
