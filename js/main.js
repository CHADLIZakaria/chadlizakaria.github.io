let mySpinner = document.querySelector(".settings .color-options .icon");
let mySettings = document.querySelector(".settings");

//Show section settings
mySpinner.onclick = function (e) {
    mySettings.classList.toggle("show");
    this.querySelector(".fa-cog").classList.toggle("fa-spin");
}

//add color option in setting 
let mySpan = document.querySelectorAll(".settings .color-options span");
let localColor = localStorage.getItem("color-options");

if (localColor !== null) {
    document.querySelector(".settings .color-options span.active").classList.remove("active");
    mySpan.forEach(span => {
        if (span.dataset.color === localStorage.getItem("color-options")) {
            span.classList.add("active");
            document.documentElement.style.setProperty("--main-color", localStorage.getItem("color-options"));
        }
    })
}
mySpan.forEach(span => {
    span.addEventListener("click", e => {
        span.parentNode.querySelector("span.active").classList.remove("active");
        span.classList.add("active");
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        localStorage.setItem("color-options", e.target.dataset.color);
    })
})

let navItem = document.querySelectorAll("header nav ul li");
navItem.forEach(listItem => {
    listItem.addEventListener("click", (e) => {
        console.log(e.target.dataset.scroll);
        document.querySelector("." + e.target.dataset.scroll).scrollIntoView(({ behavior: "smooth" }));
    })
})