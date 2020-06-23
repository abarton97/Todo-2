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

export function createProject() {
    const submit = document.querySelector(".createProject");
    let projectInput = document.querySelector(".project-input");
    submit.addEventListener("click", function () {
        if (projectInput.value == '') {
            alert("Must have project name")
        } else {
            projectName();
        }
        let modal = document.getElementById("myModal");
        projectInput.value = '';
        modal.style.display = "none";
    });
}

function projectName() {
    let project = document.querySelector(".projects")
    let taskInput = document.querySelector(".project-input").value;

    const taskName = document.createElement("div");
    taskName.setAttribute("class", "menuText projectNames");
    taskName.innerHTML = `${taskInput}`
    project.appendChild(taskName);

    let projectNames = document.getElementsByClassName("projectNames");
    for (let i = 0; i < projectNames.length; i++) {
        projectNames[i].addEventListener("click", function () {
            const container = document.querySelector(".container");
            const addTask = document.querySelector(".addTask");

            let div = this.innerHTML;
            let n = new Date();
            let d = n.getDate();

            let e = document.querySelector(".tabcontent1");
            e.id = `${div}`

            let title1 = document.querySelector(".theTitle2")
            title1.innerHTML = `${div}`
            let date = document.getElementById("pdate")


            console.log(show.ele)
            show(`${div}`);
        });
    }
}

function todaysTask() {
    let taskInput = document.querySelector(".todo-input").value;
    let date = document.querySelector(".todo-date").value
    let taskHolder = document.querySelector(".taskList");
    const checkContainer = document.createElement("label");
    checkContainer.setAttribute("class", "containers");
    taskHolder.appendChild(checkContainer);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "myCheck");
    checkContainer.appendChild(checkBox);

    const checkMark = document.createElement("span");
    checkMark.setAttribute("class", "checkmark");
    checkMark.setAttribute("id", "myCheck");
    checkContainer.appendChild(checkMark)

    const taskName = document.createElement("span");
    taskName.setAttribute("class", "taskName");
    taskName.innerHTML = `${taskInput}`
    checkContainer.appendChild(taskName);

    const taskDate = document.createElement("span");
    taskDate.setAttribute("class", "taskDate");
    taskDate.innerHTML = `${date}`
    checkContainer.appendChild(taskDate);

    const description = document.createElement("span");
    description.setAttribute("class", "description");
    description.innerHTML = `- Hello`
    checkContainer.appendChild(description);

    const remove = document.createElement("button");
    remove.setAttribute("class", "remove");
    remove.innerHTML = '<i class="fas fa-recycle"></i>';
    checkContainer.appendChild(remove);

    const star = document.createElement("button");
    star.setAttribute("class", "star");
    star.innerHTML = '<i class="far fa-star"></i>';
    checkContainer.appendChild(star);

    const cell = document.createElement("li")
    cell.setAttribute("class", "cell")
    checkContainer.appendChild(cell)
    let close = document.getElementsByClassName("remove");
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
            let div = this.parentElement;
            localStorage.removeItem(div);
            div.parentNode.removeChild(div);
        });
    }
    storeToday();
}

function storeToday() {
    let list = document.querySelector(".taskList")
    window.localStorage.todayItems = list.innerHTML;
}

function futureTasks() {
    let taskInput = document.querySelector(".todo-input").value;
    let date = document.querySelector(".todo-date").value
    let taskHolder = document.querySelector(".taskList1");

    const checkContainer = document.createElement("label");
    checkContainer.setAttribute("class", "containers");
    taskHolder.appendChild(checkContainer);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "myCheck");
    checkContainer.appendChild(checkBox);

    const checkMark = document.createElement("span");
    checkMark.setAttribute("class", "checkmark");
    checkMark.setAttribute("id", "myCheck");
    checkContainer.appendChild(checkMark)

    const taskName = document.createElement("span");
    taskName.setAttribute("class", "taskName");
    taskName.innerHTML = `${taskInput}`
    checkContainer.appendChild(taskName);

    const taskDate = document.createElement("span");
    taskDate.setAttribute("class", "taskDate");
    taskDate.innerHTML = `${date}`
    checkContainer.appendChild(taskDate);

    const remove = document.createElement("button");
    remove.setAttribute("class", "remove");
    remove.innerHTML = '<i class="fas fa-recycle"></i>';
    checkContainer.appendChild(remove);

    const star = document.createElement("button");
    star.setAttribute("class", "star");
    star.innerHTML = '<i class="far fa-star"></i>';
    checkContainer.appendChild(star);

    const cell = document.createElement("li")
    cell.setAttribute("class", "cell")
    checkContainer.appendChild(cell)

    let close = document.getElementsByClassName("remove");
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
            let div = this.parentElement;
            localStorage.removeItem(div);
            div.parentNode.removeChild(div);
        });
    }
    storeUpcoming();
}

function storeUpcoming() {
    let list = document.querySelector(".taskList1")
    window.localStorage.upcomingItems = list.innerHTML;
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

    let header = document.querySelector(".textContainer");
    let tablink = header.getElementsByClassName("tablink");
    for (let i = 0; i < tablink.length; i++) {
        tablink[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

    let projects = document.querySelector(".projectText");
    let projectInput = document.querySelector(".projects")
    let boxOpen = false;
    projects.addEventListener("click", function () {
        if (boxOpen == false) {
            projectInput.style.display = "block";
            projects.innerHTML = '<i class="fas fa-caret-down"></i>&nbsp;&nbsp;Projects'
            boxOpen = true;
        } else if (boxOpen == true) {
            projectInput.style.display = "none";
            projects.innerHTML = '<i class="fas fa-caret-right"></i>&nbsp;&nbsp;Projects'
            boxOpen = false;
        }
    });


    let modal = document.getElementById("myModal");
    // Get the button that opens the modal
    let btn = document.querySelector(".createBtn");
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    btn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}


function isToday(dateParameter) {
    let today = new Date();
    return dateParameter.getUTCFullYear() === today.getUTCFullYear() && dateParameter.getUTCMonth() === today.getUTCMonth() && dateParameter.getUTCDate() === today.getUTCDate();
}

