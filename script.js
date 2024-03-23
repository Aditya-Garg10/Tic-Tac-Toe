const boxes = document.querySelectorAll(".parent")
const msg = document.querySelector(".message")
const winMsg = document.querySelector(".win-msg") 

msg.addEventListener("click",() =>{
        rstBtn();
});

let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click",() => {
    const userChoice = box.getAttribute("id")
    console.log(userChoice)
    
    
    if (turnO) {
        box.innerText = "O"
        turnO = false;
    }
    
    else{
        box.innerText = "X"
        turnO = true;
    }

    box.disabled = true;

    checkwinner()

});});

let array1 = [[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];


const rstBtn = () => {
    turnO = true;
    enableBtn();
    winMsg.innerText = ""
}

const enableBtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => { 
winMsg.innerText = `Congratulations, Winner is ${winner}`

}

const checkwinner = () =>{
for (let pattern of array1) {
    let val1 = boxes[pattern[0]].innerText; 
    let val2 = boxes[pattern[1]].innerText; 
    let val3 = boxes[pattern[2]].innerText;


    if (val1 != "" && val2 != "" && val3 != ""){
        if (val1 == val2 && val2 == val3 && val3 == val1){
            for(let box of boxes){
                box.disabled = true;
            }
            showwinner(val1)
        }
    }
    }
}












/*
userPlay(userChoice)

const userPlay = (userChoice,) => {

    if (userChoice === "box1"){
        const box1 = document.querySelector("#box1");
        box1.innerText = "X";
    }
    else if (userChoice === "box2"){
        const box2 = document.querySelector("#box2");
        box2.innerText = "X";
    }
    else if (userChoice === "box3"){
        const box3 = document.querySelector("#box3");
        box3.innerText = "X";
    }else if (userChoice === "box4"){
        const box4 = document.querySelector("#box4");
        box4.innerText = "X";
    }
    else if (userChoice === "box5"){
        const box5 = document.querySelector("#box5");
        box5.innerText = "X";
    }
    else if (userChoice === "box6"){
        const box6 = document.querySelector("#box6");
        box6.innerText = "X";
    }
    else if (userChoice === "box7"){
        const box7 = document.querySelector("#box7");
        box7.innerText = "X";
    }
    else if (userChoice === "box8"){
        const box8 = document.querySelector("#box8");
        box8.innerText = "X";
    }
    else{
        const box9 = document.querySelector("#box9");
        box9.innerText = "X";
    } */
    

 
    


