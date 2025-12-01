let body = document.body;
let cli = document.getElementById('but');


function onClick(ee){
  if(ee.classList.contains('active')){
    body.style.backgroundColor = 'pink'; 
    ee.classList.remove('active');   
     ee.textContent = 'ONNNNNNNNNNN';

  }else{
    ee.classList.add('active');
     body.style.backgroundColor = 'black';
     ee.textContent = 'OFFFFFFFFFFF';
  }
}