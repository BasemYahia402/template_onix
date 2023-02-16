// bars of navbar
let bars = document.getElementById("bars");
let ul = document.getElementById("ul");
let cancel = document.getElementById("cancel")
bars.onclick = function () {
    ul.style = "left:0";
    // bars.style.display = "none";
    // cancel.style.display = "block";
}
// cancel.onclick = function () {
//     ul.style = "top:-1000%";
//     bars.style.display = "block";
//     cancel.style.display = "none";
// }
// ul.onclick=function(){
//     cancel.style.display="none";
//     bars.style.display = "block";
// }

// numbers of cards for about
let numbers = document.getElementById("numbers");
let nums = document.querySelectorAll(".num")
function startcount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 10);
}
let started = false;


// nabvar
let myNav = document.getElementById('mynav');
let row = document.querySelector(".row");
window.onscroll = function () {
    if (window.scrollY >= 20) {
        myNav.style.height = "80px";
        row.style.height = "80px";
        myNav.style.backgroundColor = "#FFFFFF";
        myNav.style.boxShadow = " 0 4px 2px -2px #e7e7e7";
    }
    else {
        myNav.style.height = "100px";
        row.style.height = "100px";
        myNav.style.backgroundColor = "#FAFAFA";
        myNav.style.boxShadow = "0 0 0 0";
    }
    if (window.scrollY >= numbers.offsetHeight - 10000) {
        if (!started) {
            nums.forEach((num) => {
                startcount(num);
            })
        }
        started = true;
    }
};
let uls = document.querySelectorAll('ul li');
uls.forEach((li) => {
    li.addEventListener("click", function (l) {
        ul.style = "top:-1000%";
    })
})

// slider in cards
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

let alltaps = document.querySelectorAll(".tap");
let tapsarray = Array.from(alltaps);
let allcontent = document.querySelectorAll(".thumb");
let divsarray = Array.from(allcontent);
tapsarray.forEach((tap) => {
    tap.addEventListener("click", function (e) {
        tapsarray.forEach((tap) => {
            tap.classList.remove("active");
        })
        tap.classList.add("active");
        divsarray.forEach((div) => {
            div.style.display = "none";
        })
        document.querySelector(tap.getAttribute("data-cont")).style.display = "block";
    })
})