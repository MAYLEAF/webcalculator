var calcbtn = document.getElementsByClassName('calcbtn')
var clearbtn = document.getElementById('clearText')
var computebtn = document.getElementById('compute')
var mbtn = document.getElementById('memory')
var mem = []

clearbtn.addEventListener('click', clearText)
computebtn.addEventListener('click', compute)
mbtn.addEventListener('click', memory)

for(var i=0;i<calcbtn.length;i++){
  calcbtn[i].addEventListener('click', addToListener);
}


function addToListener(e){
  document.getElementsByName('answer')[0].value += e.target.value
}

function clearText(e){
  document.getElementsByName('answer')[0].value = ''
}

function compute(e){
  mem.push(document.getElementsByName('answer')[0].value + '=' + eval(document.getElementsByName('answer')[0].value))
  document.getElementsByName('answer')[0].value = eval(document.getElementsByName('answer')[0].value)
}

function memory(e){
  while(mem.length > 0){
    document.getElementById("M").innerHTML += window.mem.shift()
    document.getElementById("M").innerHTML += '<br/>'
  }
}
