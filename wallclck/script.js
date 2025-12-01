function updateClock() {
    const now = new Date();

    const sec = now.getSeconds() * 6;
    const min = now.getMinutes() * 6 + sec / 60;
    const hour = (now.getHours() % 12) * 30 + min / 12;

    document.getElementById("hour").style.transform = `rotate(${hour}deg)`;
    document.getElementById("min").style.transform = `rotate(${min}deg)`;
    document.getElementById("sec").style.transform = `rotate(${sec}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

let scrn = document.getElementById('inscrn');

function insrt(num){
   scrn.value += num;
}

function clr(){
  scrn.value = "0";
}

function bck(){
  scrn.value = scrn.value.slice(0, -1);
}

function totl(){
  if(scrn){
    scrn.value = eval(scrn.value)
  }
}