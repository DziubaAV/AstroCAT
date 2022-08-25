const cat           = document.getElementById('cat');
const monstr        = document.getElementById('monstr');
const gameOver      = document.getElementById('gameOver');
const victory       = document.getElementById('victory');
const reloadBtn     = document.getElementById('reloadBtn');
let score           = 0;
let levelNumber     = document.getElementById('levelNumber');
let audioVictory    = document.createElement('audio');
let audioGameOver   = document.createElement('audio');

function CatJump() {

    if (cat.classList != 'animateCat') {
        cat.classList.add('animateCat');
    }

    let audioJump = document.createElement('audio');
    audioJump.setAttribute("autoplay", "true");
    audioJump.innerHTML = "<source src=\"audio/jump.wav\" type=\"audio/wav\">";
    document.body.appendChild(audioJump);

    setTimeout(function () {
        cat.classList.remove('animateCat');
    }, 2000);

}

setInterval(function () {

    var catTop      = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
    var monstrLeft  = parseInt(window.getComputedStyle(monstr).getPropertyValue("left"));
    if (monstrLeft <= 14 && monstrLeft >= 0) {
        score++;
        document.getElementById('score').innerHTML = Math.floor(score / 10);
        var userScore = document.getElementById('score').innerHTML;
    }

    if (userScore == 3) {
        monstr.classList.remove('animateMonstrLvl1');
        monstr.classList.add('animateMonstrLvl2');
        levelNumber.innerHTML = 2;
    }

    if (userScore == 6) {
        monstr.classList.remove('animateMonstrLvl2');
        monstr.classList.add('animateMonstrLvl3');
        levelNumber.innerHTML = 3;
    }

    if (userScore == 10) {
        monstr.style.animation  = "none";
        victory.style.display   = "block";
        reloadBtn.style.display = "block";
        audioVictory.setAttribute("autoplay", "true");
        audioVictory.innerHTML = "<source src=\"audio/victory.wav\" type=\"audio/wav\">";
        document.body.appendChild(audioVictory);
    }

    if (monstrLeft < 45 && monstrLeft > 0 && catTop >= 51) {
        monstr.style.animation = "none";
        gameOver.style.display = "block";
        reloadBtn.style.display = "block";
        audioGameOver.setAttribute("autoplay", "true");
        audioGameOver.innerHTML = "<source src=\"audio/game-over.wav\" type=\"audio/wav\">"
        document.body.appendChild(audioGameOver);
    }
},10);