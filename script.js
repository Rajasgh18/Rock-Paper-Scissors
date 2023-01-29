// ----------VARIABLES----------
// ----------Media Queries----------
const mediaSmall = window.matchMedia('(max-width : 850px) and (min-width : 650px)');
const mediaVerySmall = window.matchMedia('(max-width : 650px)');
// ----------Game Screen 1----------
let gameScreen1 = document.getElementById("game-screen1");

// ----------Game Screen 2----------
let gameScreen2 = document.getElementById("game-screen2");
let gamecss = document.getElementById("gamecss");

let optionArea = document.getElementById("option-selected");
let playerSelection = document.getElementById("player-selection");

let result = document.getElementById("result");
let resultHead = document.getElementById("result-head");
let resultBtn = document.getElementById("result-button");

let cpuSelection = document.getElementById("cpu-selection");
let hoverBtns = document.querySelectorAll(".gamebtns");
let gameHead = document.getElementById("game-head");

// ----------Rule Button----------
let ruleShow = document.querySelector("#ruleshow");
let ruleContainer = document.querySelector(".container");
let ruleArea = document.querySelector(".rule-container");
let crossBtn = document.querySelector("#cross");
let rulebtn = document.querySelector(".rule");

// ----------Score Board----------
let scoreBoard = document.getElementById("score-board");
let points = 0;

// ----------It Checks Previous Game Score----------
if(!(localStorage.getItem("point") == null)){
    points = localStorage.getItem("point");
    scoreBoard.innerHTML = points;
}

//----------Function for Score Calculation----------
function pointCalc(count){
    scoreBoard.innerHTML = count;
}

// ----------Displays button on passing the name of the button and place to be showed----------
function selectedGameBtn(name, element){
    switch(name)
    {
        case 'Scissors':
            element.innerHTML = `
            <div data-btns="Scissors"  id="scissors" class="Gamebtns">
                <button><img src="./images/icon-scissors.svg" alt=""></button>
            </div>`;
            break;
        
        case 'Paper':
            element.innerHTML = `
            <div data-btns="Paper" id="paper" class="Gamebtns">
                <button><img src="./images/icon-paper.svg" alt=""></button>
            </div>`;
            break;

        case 'Rocks':
            element.innerHTML = `
            <div data-btns="Rocks"  id="rocks" class="Gamebtns">
                <button><img src="./images/icon-rock.svg" alt=""></button>
            </div>  `;
            break;

        case 'Lizard':
            element.innerHTML = `
            <div data-btns="Lizard"  id="lizard" class="Gamebtns">
                <button><img src="./images/icon-lizard.svg" alt=""></button>
            </div>`;
            break;

        case 'Spock':
            element.innerHTML = `
            <div data-btns="Spock"  id="spock" class="Gamebtns">
                <button><img src="./images/icon-spock.svg" alt=""></button>
            </div>`;
            break;
    }
}

function addAnim(element){
        element.innerHTML += `
        <div class="pulse">
            <span style="--i:0"></span>
            <span style="--i:1"></span>
            <span style="--i:2"></span>
            <span style="--i:3"></span>
        </div>`
}

document.addEventListener("DOMContentLoaded", function() {
    // ----------Function on choosing button option----------
    hoverBtns.forEach(e => {
        e.onclick =  function() {

            // Generates Random value between 1-5
            let a = 1; let b = 5;
            let r = Math.random();
            let cpuNum = Math.round(a+ ( (b - a) * r)  )

            // Sliding animation and page changing functions
            gameScreen1.style.animation = "pageDisappear1 2s ease-in-out";
            gameScreen2.style.animation = "pageAppear1 2s ease-in-out"
            gameScreen2.style.display = 'flex';
            rulebtn.style.bottom = "50px";
            rulebtn.style.animation = "ruleUp 2s ease-in-out";
            
            // Adds game css file
            gamecss.href = "game.css";

            setTimeout(() => {
                // Sliding animation and page changing functions
                gameScreen1.style.display = 'none';
                gameScreen2.style.position = 'relative';
                gameScreen2.style.top = '0vh';
                gameScreen2.style.left = '0vw';
                
                // Displays the button that is clicked
                selectedGameBtn(e.dataset.btns, playerSelection);

                // Uses random numbers generated from before to show the button on screen
                switch(cpuNum)
                {
                    case 1:
                        selectedGameBtn('Scissors', cpuSelection);
                        break;

                    case 2:
                        selectedGameBtn('Paper', cpuSelection);
                        break;

                    case 3:
                        selectedGameBtn('Rocks', cpuSelection);
                        break;

                    case 4:
                        selectedGameBtn('Lizard', cpuSelection);
                        break;
                        
                    case 5:
                        selectedGameBtn('Spock', cpuSelection);
                        break;
                }
                if(mediaVerySmall.matches){
                    gameHead.style.marginLeft = '4px';
                }
                else{
                    gameHead.style.marginLeft = '20px';
                }
            }, 2000);

            setTimeout(() => {
                if(mediaSmall.matches){
                    gameHead.style.width = '500px';
                    optionArea.style.width = '558px';
                }
                else if(mediaVerySmall.matches){
                    gameHead.style.width = '250px';
                    optionArea.style.width = '260px';
                }
                else{
                    gameHead.style.width = '850px';
                    optionArea.style.width = '900px';
                }

                // Displays  Result after comparing user input and random output from cpu
                // Conditional statements for winning 
                if(e.dataset.btns == 'Scissors' && (cpuNum == 2 || cpuNum == 4)){
                    result.style.display = 'flex';
                    resultHead.innerHTML = "YOU WON";
                    addAnim(playerSelection);
                    points++;
                    pointCalc(points);
                }
                else if(e.dataset.btns == 'Paper' && (cpuNum == 3 || cpuNum == 5)){
                    result.style.display = 'flex';
                    resultHead.innerHTML = "YOU WON";
                    addAnim(playerSelection);
                    points++;
                    pointCalc(points);
                }
                else if(e.dataset.btns == 'Rocks' && (cpuNum == 4 || cpuNum == 1)){
                    result.style.display = 'flex';
                    resultHead.innerHTML = "YOU WON";
                    addAnim(playerSelection);
                    points++;
                    pointCalc(points);
                }
                else if(e.dataset.btns == 'Lizard' && (cpuNum == 5 || cpuNum == 2)){
                    result.style.display = 'flex';
                    resultHead.innerHTML = "YOU WON";
                    addAnim(playerSelection);
                    points++;
                    pointCalc(points);
                }
                else if(e.dataset.btns == 'Spock' && (cpuNum == 1 || cpuNum == 3)){
                    result.style.display = 'flex';
                    resultHead.innerHTML = "YOU WON";
                    addAnim(playerSelection);
                    points++;
                    pointCalc(points);
                }
                //Conditional statement for draw
                else if((e.dataset.btns == "Scissors" && cpuNum == 1) || (e.dataset.btns == "Paper" && cpuNum == 2) || (e.dataset.btns == "Rocks" && cpuNum == 3) || (e.dataset.btns == "Lizard" && cpuNum == 4) || (e.dataset.btns == "Spock" && cpuNum == 5)){
                    result.style.display = 'flex';
                    resultHead.innerHTML = "IT'S A DRAW";
                    pointCalc(points);
                }
                //Conditional statement for losing
                else{
                    result.style.display = 'flex';
                    resultHead.innerHTML = "YOU LOST";
                    addAnim(cpuSelection);
                    points--;
                    pointCalc(points);
                }

                // Store the score in a temporary location for future plays
                localStorage.setItem("point", points);
            }, 3500);

        }
    })

    // Functions for Result button on clicking
    resultBtn.addEventListener("click",function() {  
        gameScreen1.style.display = 'flex';
        gameScreen1.style.animation = "pageAppear2 2s ease-in-out"
        gameScreen2.style.animation = "pageDisappear2 2s ease-in-out";
        
        gameScreen1.style.position = 'absolute';
        gameScreen1.style.top = '28.5vh';
        
        if(mediaSmall.matches){
            rulebtn.style.bottom = "5px";
            rulebtn.style.animation = "ruleDown 2s ease-in-out";
        }
        if(mediaVerySmall.matches){
            rulebtn.style.bottom = "5px";
            rulebtn.style.animation = "ruleDown 2s ease-in-out";
        }

        setTimeout(() => {
            gameScreen2.style.display = 'none';
            gameScreen1.style.position = 'relative';
            gameScreen1.style.top = '0vh';
            gameScreen1.style.left = '0vw';
        }, 2000);
        setTimeout(() => {
            location.reload(true);
        }, 2300);
    })

    // Displays Rules of game
    ruleShow.addEventListener("click", () => {
        ruleContainer.style.display = 'block';
        ruleArea.style.animation = 'ruleAppear 1.25s ease-in-out';
    })
    crossBtn.addEventListener("click", () => {
        ruleArea.style.animation = 'ruleDisappear 1.25s ease-in-out';
        setTimeout(() => {
            ruleContainer.style.display = 'none';
        }, 900);
    })
})