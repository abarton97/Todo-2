import { show } from "./viewPage.js";

export function addButton() {
    const addIcon = document.querySelector(".addIcon");
    let boxOpen = false;
    let input = document.querySelector(".todo-input");
    let submit = document.querySelector(".submit");
    let todoDate = document.querySelector(".todo-date");
    addIcon.addEventListener("click", function () {
        if (boxOpen == false) {
            input.style.visibility = "visible";
            todoDate.style.visibility = "visible";
            submit.style.visibility = "visible";
            input.style.width = "17%";
            submit.style.width = "8%";
            todoDate.style.width = "13%";
            addIcon.innerHTML = '<i class="fas fa-minus"></i>';
            boxOpen = true;
        } else if (boxOpen == true) {
            setTimeout(() => {
                input.style.visibility = "hidden";
                todoDate.style.visibility = "hidden";
                submit.style.visibility = "hidden";
            }, 1000);
            input.style.width = "0%";
            todoDate.style.width = "0%";
            submit.style.width = "0%";
            addIcon.innerHTML = '<i class="fas fa-plus"></i>';
            boxOpen = false;
        }
    });
}

export function createButton() {
    const submit = document.querySelector(".submit");
    let taskInput = document.querySelector(".todo-input");
    let date = document.querySelector(".todo-date");
    submit.addEventListener("click", function () {
        if (taskInput.value == '' || date.value == '') {
            alert("Must have task and date")
        } else {
            if (isToday(new Date(date.value))) {
                todaysTask();
            } else {
                futureTasks();
            }
        }
        taskInput.value = '';
        date.value = '';
    });
}

function todaysTask() {
    let taskInput = document.querySelector(".todo-input").value;
    let date = document.querySelector(".todo-date").value
    let incompleteTaskHolder = document.querySelector(".taskList");

    const cell = document.createElement("li")
    cell.setAttribute("class", "cell")
    incompleteTaskHolder.appendChild(cell)

    const checkContainer = document.createElement("label");
    checkContainer.setAttribute("class", "containers");
    checkContainer.innerHTML = `${taskInput}`;
    cell.appendChild(checkContainer);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkContainer.appendChild(checkBox);

    const checkMark = document.createElement("span");
    checkMark.setAttribute("class", "checkmark");
    checkContainer.appendChild(checkMark)

    const taskDate = document.createElement("span");
    taskDate.setAttribute("class", "taskDate");
    taskDate.innerHTML = `${date}`
    checkContainer.appendChild(taskDate);
}

function futureTasks() {
    let taskInput = document.querySelector(".todo-input").value;
    let date = document.querySelector(".todo-date").value
    let incompleteTaskHolder = document.querySelector(".taskList1");

    const cell = document.createElement("li")
    cell.setAttribute("class", "cell")
    incompleteTaskHolder.appendChild(cell)

    const checkContainer = document.createElement("label");
    checkContainer.setAttribute("class", "containers");
    checkContainer.innerHTML = `${taskInput}`;
    cell.appendChild(checkContainer);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkContainer.appendChild(checkBox);

    const checkMark = document.createElement("span");
    checkMark.setAttribute("class", "checkmark");
    checkContainer.appendChild(checkMark)

    const taskDate = document.createElement("span");
    taskDate.setAttribute("class", "taskDate");
    taskDate.innerHTML = `${date}`
    checkContainer.appendChild(taskDate);
}

export function upcomingTasks() {
    let today = document.querySelector("#today");
    today.addEventListener("click", function () {
        show('Today');
    });

    let upcoming = document.querySelector("#upcoming");
    upcoming.addEventListener("click", function () {
        show('Upcoming');
    });
}


function isToday(dateParameter) {
    var today = new Date();
    return dateParameter.getUTCFullYear() === today.getUTCFullYear() && dateParameter.getUTCMonth() === today.getUTCMonth() && dateParameter.getUTCDate() === today.getUTCDate();
}

