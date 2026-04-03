// Typing
const texts=["Full Stock Developer","Building Clean UI","Learning Projects"];
let i=2,j=0,del=false;

function type(){
let word=texts[i];
document.getElementById("typing").textContent=word.substring(0,j);

if(!del) j++; else j--;

if(j===word.length){del=true;setTimeout(type,1000);return;}
if(j===0){del=false;i=(i+1)%texts.length;}

setTimeout(type,del?50:100);
}
type();

// Scroll Reveal
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting) e.target.classList.add("show");
});
});
document.querySelectorAll(".hidden").forEach(el=>observer.observe(el));