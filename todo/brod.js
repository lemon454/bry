
function addd() {
  let names = document.getElementById('name');
  let works = document.getElementById('work');
  let clik = document.getElementById('but');

  let namesval = names.value.trim();
  let worksval = works.value.trim();


  if (namesval === "" || worksval === "") {
    alert("Please Fill in the blank");
    return;
  } else {
    let people = { name: namesval, task: worksval };

    let storage = JSON.parse(localStorage.getItem('todo')) || [];
    storage.push(people);
    localStorage.setItem('todo', JSON.stringify(storage));

    let his = document.getElementById('history');
    his.style.display = 'block';
    names.value = "";
    works.value = "";
    display();
  }
};

function display() {
  let storage = JSON.parse(localStorage.getItem('todo')) || [];
  let ul = document.getElementById('ul');
  ul.innerHTML = "";

  storage.forEach((nam, index) => {
    let li = document.createElement('li');

    // Create text container
    let textSpan = document.createElement('span');
    textSpan.textContent = `Name: ${nam.name} | Todo: ${nam.task}`;
    li.appendChild(textSpan);

    // --- Edit button ---
    let editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.addEventListener('click', () => editItem(index, li, textSpan));

    // --- Delete button ---
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', () => deleteItem(index));

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
  });
}

function editItem(index, li, textSpan) {
  let storage = JSON.parse(localStorage.getItem('todo')) || [];
  let current = storage[index];

  // Clear old content inside <li>
  li.innerHTML = "";

  // Create editable inputs
  let nameInput = document.createElement('input');
  nameInput.value = current.name;
  nameInput.placeholder = "Name";

  let taskInput = document.createElement('input');
  taskInput.value = current.task;
  taskInput.placeholder = "Task";

  // --- Save button ---
  let saveBtn = document.createElement('button');
  saveBtn.textContent = "Save";
  saveBtn.addEventListener('click', () => {
    let newName = nameInput.value.trim();
    let newTask = taskInput.value.trim();

    if (newName === "" || newTask === "") {
      alert("Please fill out both fields.");
      return;
    }

    storage[index].name = newName;
    storage[index].task = newTask;
    localStorage.setItem('todo', JSON.stringify(storage));
    display(); // Re-render the list
  });

  // --- Cancel button ---
  let cancelBtn = document.createElement('button');
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener('click', display);

  // Add all elements back into the list item
  li.appendChild(nameInput);
  li.appendChild(taskInput);
  li.appendChild(saveBtn);
  li.appendChild(cancelBtn);
}
