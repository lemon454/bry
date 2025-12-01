let name = "john";
const age = 18;

console.log(name);
console.log(age);

function add(){
    let name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();

    let student = {name: name, age: age};
    let task = JSON.parse(localStorage.getItem('lists')) || [];
    task.push(student);
    
    localStorage.setItem('lists',JSON.stringify(task));

    let ul = document.getElementById('ul');
    ul.innerHTML = "";

    task.forEach((names,index) => {
        let li = document.createElement('li');
        li.textContent = `${names.name} - ${names.age} `;

        ul.appendChild(li);
    });
}

var changes = document.getElementById('h1me');

changes.addEventListener('click',function(){
    
})
