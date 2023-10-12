const titles = ["Web Developer"];
const titleElement = document.getElementById("landing-title");
let titleIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeTitle() {
    const currentTitle = titles[titleIndex];
    if (charIndex < currentTitle.length) {
        titleElement.textContent += currentTitle.charAt(charIndex);
        charIndex++;
        setTimeout(typeTitle, 150); 
    } else {
        isTyping = false;
        setTimeout(eraseTitle, 2000);
    }
}
function eraseTitle() {
    if (titleElement.textContent.length > 0) {
        titleElement.textContent = titleElement.textContent.slice(0, -1);
        setTimeout(eraseTitle, 100); 
    } else {
        
        titleIndex = (titleIndex + 1) % titles.length;
        charIndex = 0;
        isTyping = true;
        setTimeout(typeTitle, 500); 
    }
}
function updateTitle() {
    if (isTyping) {
        eraseTitle();
    } else {
        typeTitle();
    }
}
updateTitle();

const h1Name = document.getElementById("h1-name");

const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");
logo1.textContent = "jan";
logo2.textContent = ".dev";


const navbar = document.getElementById("navbar");
let scrolling = false;
function handleScroll() {
if (!scrolling) {
    scrolling = true;
    navbar.style.transform = "translateY(-100%)";
}

clearTimeout(scrollTimeout);
scrollTimeout = setTimeout(function () {
    scrolling = false;
    navbar.style.transform = "translateY(0)";
}, 300);
}

let scrollTimeout;
window.addEventListener("scroll", handleScroll);