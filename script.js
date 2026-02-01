const text = ["Frontend Developer", "Web Designer", "JavaScript Learner"];
let index = 0;
let char = 0;

function typing() {
    if (char < text[index].length) {
        document.querySelector(".typing").textContent += text[index][char];
        char++;
        setTimeout(typing, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (char > 0) {
        document.querySelector(".typing").textContent =
            text[index].substring(0, char - 1);
        char--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(typing, 500);
    }
}

typing();