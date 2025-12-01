const body = document.body;
const mt1 = document.querySelector('.m1 img');
const mt2 = document.querySelector('.m2 img');
const mt3 = document.querySelector('.m3 img');
const typ = document.querySelector('.type');

function resetAll() {
  [mt1, mt2, mt3].forEach(img => {
    img.style.width = '20px';
    img.style.height = '300px';
  });
}

mt1.addEventListener('click', () => {
  resetAll();
  mt1.style.width = '500px';
  mt1.style.height = '400px';
  typ.innerHTML = 'Sword Grey';
  body.style.backgroundColor = 'grey';
});

mt2.addEventListener('click', () => {
  resetAll();
  mt2.style.width = '500px';
  mt2.style.height = '400px';
  typ.innerHTML = 'Prestige Silver';
  typ.style.color = 'black';
  body.style.backgroundColor = 'silver';
});

mt3.addEventListener('click', () => {
  resetAll();
  mt3.style.width = '500px';
  mt3.style.height = '400px';
  typ.innerHTML = 'Dark Petrol';
  typ.style.color = 'black';
  typ.style.textShadow = '0 3px 50px';
  body.style.backgroundColor = 'rgba(19, 104, 45, 0.418)';
});

const images = document.querySelectorAll('.box img');

images.forEach(img => {
  img.addEventListener('click', () => {
    images.forEach(i => i.classList.remove('active')); 
    img.classList.add('active'); 
    document.querySelector('.parts').classList.add('show');

  });
});
