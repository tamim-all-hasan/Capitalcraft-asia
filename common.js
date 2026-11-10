
(function(){
 const root=document.documentElement;
 const saved=localStorage.getItem('cc-theme')||'dark';
 root.dataset.theme=saved;
 window.toggleTheme=function(){
   const next=root.dataset.theme==='dark'?'light':'dark';
   root.dataset.theme=next;localStorage.setItem('cc-theme',next);updateThemeButton();
 };
 window.updateThemeButton=function(){
   const b=document.getElementById('themeToggle');
   if(b)b.textContent=root.dataset.theme==='dark'?'☀️ Light':'🌙 Dark';
 };
 window.addEventListener('DOMContentLoaded',updateThemeButton);
 window.getWorldStats=function(){
   const history=JSON.parse(localStorage.getItem('cc-history')||'[]');
   return {quizzes:history.length,best:history.length?Math.max(...history.map(x=>x.percent)):0};
 };
 window.saveQuizResult=function(continent,score,total){
   const history=JSON.parse(localStorage.getItem('cc-history')||'[]');
   history.push({continent,score,total,percent:Math.round(score/total*100),date:new Date().toISOString()});
   localStorage.setItem('cc-history',JSON.stringify(history.slice(-100)));
 };
})();
