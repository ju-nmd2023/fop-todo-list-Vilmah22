// loading content from HTML
let tasks = [];
const inputElement = document.getElementById("writeATask");
const addUlItem = document.getElementById("list-container");

window.addEventListener("load", () => {
  const tasksInStorage = localStorage.getItem("tasks");
  if (tasksInStorage) {
    tasks = JSON.parse(tasksInStorage);
    showTasks();
  }

  const addButtonElement = document.querySelector(".taskConfirm");
  addButtonElement.addEventListener("click", addTask);
});

function addTask() {
  let inputFieldText = inputElement.value;

  // this line of code was retrieved from my dad
  if (inputFieldText == "") {
    return;
  }
  //

  let task = {
    taskName: inputFieldText,
    statusIsChecked: false,
  };
  tasks.push(task);
  // this line of code was retrieved from: https://blog.logrocket.com/localstorage-javascript-complete-guide/ Accessed: 14/04/24
  localStorage.setItem("tasks", JSON.stringify(tasks));
  //
  showTasks();
  inputElement.value = "";
}

function showTasks() {
  addUlItem.innerHTML = "";
  for (i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    let liTaskElement = document.createElement("li");

    liTaskElement.innerText = tasks[i].taskName;

    addUlItem.appendChild(liTaskElement);

    const imgElement = document.createElement("img");
    imgElement.classList.add("imagechecked");
    imgElement.src = "images/checked.jpeg";
    imgElement.height = 40;
    addUlItem.appendChild(imgElement);

    imgElement.addEventListener("click", function () {
      liTaskElement.style.textDecoration = "line-through";
      task.statusIsChecked = true;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
    addUlItem.appendChild(imgElement);

    const imgElement2 = document.createElement("img");
    imgElement2.classList.add("imageremoved");
    imgElement2.src = "images/remove.jpeg";
    imgElement2.height = 40;
    addUlItem.appendChild(imgElement2);

    let index = i;

    imgElement2.addEventListener("click", function () {
      tasks.splice(index, 1);
      showTasks();
    });
  }
}
