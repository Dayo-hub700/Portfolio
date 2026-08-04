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
