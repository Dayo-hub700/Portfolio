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
