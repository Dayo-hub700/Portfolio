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
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const speed = target/50;

const update = ()=>{

count += speed;

if(count < target){

counter.innerText = Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText = target + "+";

}

}

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>counterObserver.observe(counter));

const text = "Turning curiosity into insight through data, psychology and writing.";

const typingElement = document.getElementById("typing-text");

let index = 0;

function type(){

if(index < text.length){

typingElement.textContent += text.charAt(index);

index++;

setTimeout(type,40);

}

}

window.addEventListener("load",type);
