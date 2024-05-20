const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
    nav_list.classList.toggle('open');
    hamburger_icon.classList.toggle('active');
    console.log("deneme");
}
);
document.addEventListener("DOMContentLoaded", function() {
    const projelerButton = document.querySelector(".hardem-info-button");
    projelerButton.addEventListener("click", function() {
        window.open("https://smartlab.toros.edu.tr/#projeler", "_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const hakkındaButton = document.querySelector(".hakkında-info-button");
    hakkındaButton.addEventListener("click", function() {
        window.open("https://smartlab.toros.edu.tr/biz-kimiz/", "_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const secButton = document.querySelector(".sec .sec-button");
    const form = document.getElementById("form");
    const formBottom = form.getBoundingClientRect().bottom + window.pageYOffset;
    secButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({ top: formBottom, behavior: 'smooth' });
    });
});

