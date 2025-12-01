
let button = document.getElementById('but');
const body = document.body;

button.addEventListener('click', () => {
  body.style.backgroundImage = "url('gatsby.webp')";
})


let person = {
  name: "bert",
  age: 20,
  color: "red"
}

function pers(name,age,color){
  this.name = name;
  this.age = age;
  this.color = color;
}

const father = new pers("bert",19,"red");

console.log(`My father is ${father.age}`);
console.log(`Name: ${person.name} \n Age: ${person.age}`);