let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["red", "blue", "yellow", "green"];

let h2 = document.querySelector ("h2");

document.addEventListener ("keypress", function () {
    if (started == false) {
        console.log ("Game has started")
        started = true;

        levelUp();
    }
})

function flash (btn) {
    btn.classList.add("flash");
    setTimeout ( function () {
        btn.classList.remove("flash");
    }, 100)
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let random = Math.floor(Math.random() * 4);
    let randColor = btns[random];
    gameSeq.push(randColor);
                                                              console.log (gameSeq);
    let randbtn = document.querySelector (`.${randColor}`);
    flash(randbtn);
}

function check (inx) {
    if (gameSeq[inx] == userSeq[inx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout (levelUp, 1000);
        }
    }
    else if (started) {
        h2.innerHTML = `Game Over! Your score was <b>${level-1}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout ( function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250)
        reset();
    }
}

function btnPress () {
    let btn = this;
    flash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    check(userSeq.length - 1);
}

let allBtns = document.querySelectorAll (".btn");
for (btn of allBtns) {
    btn.addEventListener ("click", btnPress);
}

function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}