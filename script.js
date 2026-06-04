let gameseq=[];
let usweseq=[];

let start=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("Game is Started");
        start=true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function levelup(){
    level++;
    h2.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*4);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    btnflash(randbtn);
}

function btnpress(){
    let btn=this;
    btnflash(btn);
}
let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}