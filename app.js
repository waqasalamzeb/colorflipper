let btn=document.getElementById("click")
function clickme(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let clr=`#${randomColor}`
    document.body.style.backgroundColor=clr    
    btn.innerText=clr
}