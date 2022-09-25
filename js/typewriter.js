const title = document.getElementById("reativity");
const txt = "reativity";

function typewriter(word, index){
    if(index < word.length) {
        setTimeout(()=> {
            title.innerHTML += `<p>${word[index]}</p>`
            typewriter(txt, index + 1)
        },300);
    }
}
setTimeout(()=> {
    typewriter(txt, 0)
}, 500)

const titlePartTwo = document.getElementById("bigO");
const txtPartTwo = "has"

function typewriterTwo(word, index){
    if(index < word.length) {
        setTimeout(()=> {
            titlePartTwo.innerHTML += `<p>${word[index]}</p>`
            typewriterTwo(txtPartTwo, index + 1)
        },300);
    }
}
setTimeout(()=> {
    typewriterTwo(txtPartTwo, 0)
}, 3200)

const titlePartThree = document.getElementById("bigOtwo");
const txtPartThree = "n"

function typewriterThree(word, index){
    if(index < word.length) {
        setTimeout(()=> {
            titlePartThree.innerHTML += `<p>${word[index]}</p>`
            typewriterThree(txtPartThree, index + 1)
        },300);
    }
}
setTimeout(()=> {
    typewriterThree(txtPartThree, 0)
}, 4100)

const titlePartFour = document.getElementById("bor");
const txtPartFour = "bor"

function typewriterFour(word, index){
    if(index < word.length) {
        setTimeout(()=> {
            titlePartFour.innerHTML += `<p>${word[index]}</p>`
            typewriterFour(txtPartFour, index + 1)
        },300);
    }
}
setTimeout(()=> {
    typewriterFour(txtPartFour, 0)
}, 5000)

const titlePartFive = document.getElementById("rs");
const txtPartFive = "rs."

function typewriterFive(word, index){
    if(index < word.length) {
        setTimeout(()=> {
            titlePartFive.innerHTML += `<p>${word[index]}</p>`
            typewriterFive(txtPartFive, index + 1)
        },300);
    }
}
setTimeout(()=> {
    typewriterFive(txtPartFive, 0)
}, 5900)