document.addEventListener("DOMContentLoaded", () => {

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.15

});

document.querySelectorAll(

'.project-card, .focus-card, .skill-card, .stat, .quote-card, .dashboard-card, .info-card, .article-card'

).forEach(el=>observer.observe(el));

});

const phrases = [

"Turning curiosity into insight.",

"Exploring data with purpose.",

"Studying psychology and neuroscience.",

"Transforming data into stories."

];

const typingElement = document.getElementById("typing-text");

let phraseIndex = 0;

let letterIndex = 0;

let deleting = false;

function typeEffect(){

const current = phrases[phraseIndex];

if(!deleting){

typingElement.textContent = current.substring(0,letterIndex++);

if(letterIndex > current.length){

deleting = true;

setTimeout(typeEffect,1800);

return;

}

}else{

typingElement.textContent = current.substring(0,--letterIndex);

if(letterIndex===0){

deleting=false;

phraseIndex=(phraseIndex+1)%phrases.length;

}

}

setTimeout(typeEffect,deleting?35:55);
  

}

window.addEventListener("load",typeEffect);

const toggle = document.getElementById("theme-toggle");

if(toggle){

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark-mode");

toggle.innerHTML="☀️";

}

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

toggle.innerHTML="☀️";

}else{

localStorage.setItem("theme","light");

toggle.innerHTML="🌙";

}

});

}
