const body = document.querySelector('body');


const audio = new Audio('let.mp4');    
function onClick(el) {
  if (el.classList.contains('active')) {
    body.style.backgroundColor = '#db9d9dff';
    el.classList.remove('active');
    audio.pause();
    body.style.backgroundImage = 'none';
  } else {
    el.classList.add('active');
    body.style.backgroundColor = '#fff';
    body.style.backgroundImage = 'url("gatsby.webp")';
    body.style.backgroundSize = 'cover'; 
    body.style.backgroundPosition = 'center';  
    body.style.backgroundRepeat = 'no-repeat';
    audio.play();
  }
}