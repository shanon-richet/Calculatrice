var rep= document.querySelector('.réponse');

var one = document.querySelector('.one').onclick = function(){
    rep.innerHTML += "1";
}
var two = document.querySelector('.two').onclick = function(){
    rep.innerHTML += "2";
}
var three = document.querySelector('.three').onclick = function(){
    rep.innerHTML += "3";
}
var four = document.querySelector('.four').onclick = function(){
    rep.innerHTML += "4";
}
var five = document.querySelector('.five').onclick = function(){
   rep.innerHTML += "5";
}
var six = document.querySelector('.six').onclick = function(){
    rep.innerHTML += "6";
}
var seven = document.querySelector('.seven').onclick = function(){
    rep.innerHTML += "7";
}
var eight = document.querySelector('.eight').onclick = function(){
    rep.innerHTML += "8";
}
var nine = document.querySelector('.nine').onclick = function(){
    rep.innerHTML += "9";
}
var droite = document.querySelector('.droite').onclick = function(){
    rep.innerHTML += ")";
}
var gauche = document.querySelector('.gauche').onclick = function(){
    rep.innerHTML += "(";
}
var addition = document.querySelector('.addition').onclick = function(){
    rep.innerHTML += "+";
}
var soustraction = document.querySelector('.soustraction').onclick = function(){
    rep.innerHTML += "-";
}
var multiplication = document.querySelector('.multiplication').onclick = function(){
    rep.innerHTML += "*";
}
var division = document.querySelector('.division').onclick = function(){
    rep.innerHTML += "/";
}

let today = new Date()
let date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();


const section = document.querySelector('section');

var égal = document.querySelector('.égal').onclick = function égal(){
    rep.innerHTML += "=" + eval(rep.innerHTML);  
    var history = document.createElement('p');
   history.innerText = date + '(' + (rep.innerHTML) + ')'; 
    section.appendChild(history)
}

document.body.addEventListener("keydown", keyEvent);
function keyEvent(event){
    var x = event.keyCode;
    if (x = 32){
    égal();
    }
}

var field= document.querySelector('.reset').onclick= function() {
    rep.innerHTML = "";
}


