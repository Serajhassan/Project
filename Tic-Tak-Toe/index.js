let chance="X";
let game=["","","","","","","","",""];

const main=document.querySelector("#main");
main.addEventListener("click",(e)=>{
    let curr=e.target;
    let index=parseInt(curr.dataset.index);
    if(curr.innerText==""){
    curr.innerText=chance;
    game[index]=chance;
    let isWin=checkWin();
    if(isWin){
        setTimeout(()=>{
        alert(`${chance} player win`);
        resetGame();
        chance="X";
        },100)
        return;
        
    }
    let isDraw=checkDraw();
    if(isDraw){
        setTimeout(()=>{
        alert("It is Draw");
        resetGame();
        chance="X";
        },100)
        return;
    }
     chance=chance=="X"?"O":"X";
    } 
})
function checkWin(){
    //check for rows
    if(checkEqual(0,1,2,chance) || checkEqual(3,4,5,chance) || checkEqual(6,7,8,chance)){
        return true;
    }
    // check for colums;
    if(checkEqual(0,3,6,chance) || checkEqual(1,4,7,chance) || checkEqual(2,5,8,chance)){
        return true;
    }
    if(checkEqual(0,4,8,chance) || checkEqual(2,4,6,chance)){
        return true;
    }
    return false;

    
}
function checkEqual(a,b,c,chance){
    if(game[a]==chance && game[b]==chance && game[c]==chance){
        return true;

    }
    return false;
}
function resetGame(){
    game=["","","","","","","","",""];
    let cells=main.children;
    for(let i=0;i<cells.length;i++){
        cells[i].innerText="";
    }

}
// function that check that is their any chamce left
function checkDraw(){
    for(let i=0;i<game.length;i++){
        if(game[i]==""){
            return false;
        }
    }
    return true;
}