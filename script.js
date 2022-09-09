const character = document.getElementById('character');
const block = document.getElementById('block');

function jump () {
    if (character.classList != 'animation') {
    character.classList.add('animation');
    }
    setTimeout(function(){
        character.classList.remove('animation');
    }, 500)
}

const checkDead = setInterval(function(){
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        alert("YOU LOSE!");
    }
}, 10);