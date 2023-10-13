let mode = document.getElementById("mode");
let body = document.getElementById("body");

mode.addEventListener("click",()=>{
    mode.classList.toggle("mode");
    mode.classList.toggle("mode--dark");
    mode.children[0].classList.toggle("bi-moon");
    mode.children[0].classList.toggle("bi-sun-fill");
    body.classList.toggle("theme");
    body.classList.toggle("theme--dark");
})