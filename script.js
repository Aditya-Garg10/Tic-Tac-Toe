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





 
    


