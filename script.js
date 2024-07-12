let texts = [
    "Welcome to Smanika Computer Club!", "Let's join us!"
];

let currentIndex = 0;
let charIndex = 0;
const typingSpeed = 80; 
const container = document.getElementById("text-container");

function typeText() {
    if (charIndex < texts[currentIndex].length) {
        container.textContent += texts[currentIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, 800); 
    }
}

function eraseText() {
    if (charIndex > 0) {
        container.textContent = texts[currentIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, typingSpeed);
    } else {
        currentIndex = (currentIndex + 1) % texts.length; 
        setTimeout(typeText, 500);
    }
}

typeText();