const img = document.getElementById(`img`);
const buttons = document.getElementById(`buttons`);
let colorIndex = 0;
let intervalid = null;

const trafficLight = (event)=>{
StopAutomatic ();
turnOn[event.target.id]();
}
 const nextindex = ()=>colorIndex = colorIndex < 2 ? ++colorIndex: 0;


 const changeColor = () =>{
const colors = [`red`,`yellow`,`green`]
const color = colors[colorIndex];
turnOn[color] ();
nextindex();
 }

 const StopAutomatic = ()=>{
    clearInterval(intervalid);
 }
const turnOn ={
   'red': ()=> img.src = './img/vermelho.png',
   'yellow': ()=> img.src = './img/amarelo.png',
   'green': ()=> img.src = './img/verde.png',
   'automatic': () => intervalid = setInterval (changeColor,1500)
 }
  buttons.addEventListener('click', trafficLight);
