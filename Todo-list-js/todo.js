// loading content from HTML
let tasks = [];
const inputElement = document.getElementById("writeATask");
const addUlItem = document.getElementById("list-container");

window.addEventListener("load", () => {
  const addButtonElement = document.querySelector(".taskConfirm");
  addButtonElement.addEventListener("click", addTask);
});

function addTask() {
  let inputFieldText = inputElement.value;
  let task = {
    taskName: inputFieldText,
    done: "checked.jpeg",
    remove: "remove.jpeg",
  };
  tasks.push(task);
  showTasks();
  inputElement.value = "";
}

function showTasks() {
  addUlItem.innerHTML = "";
  for (i = 0; i < tasks.length; i++) {
    let liTaskElement = document.createElement("li");

    liTaskElement.innerText = tasks[i].taskName;

    addUlItem.appendChild(liTaskElement);

    const imgElement = document.createElement("img");
    imgElement.classList.add(".imagechecked");
    imgElement.src = tasks[i].done;
    imgElement.height = 40;
    addUlItem.appendChild(imgElement);

    imgElement.addEventListener("click", function () {
      liTaskElement.style.textDecoration = "line-through";
    });
    addUlItem.appendChild(imgElement);

    const imgElement2 = document.createElement("img");
    imgElement2.classList.add(".imageremove");
    imgElement2.src = tasks[i].remove;
    imgElement2.height = 40;
    addUlItem.appendChild(imgElement2);

    let index = i;

    imgElement2.addEventListener("click", function () {
      tasks.splice(index, 1);
      showTasks();
    });
  }
}

localStorage.setItem(JSON.stringify(tasks));
