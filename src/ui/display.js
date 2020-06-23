

export function createHeader() {
    const container = document.querySelector(".container");

    const header = document.createElement("header");
    header.setAttribute("class", "header");
    container.appendChild(header);


    const controls = document.createElement("div");
    controls.setAttribute("class", "constrols");
    header.appendChild(controls)

    const collapse = document.createElement("button");
    collapse.setAttribute("class", "collapse");
    collapse.innerHTML = '<i class="fas fa-bars"></i>'
    controls.appendChild(collapse)

    const home = document.createElement("button");
    home.setAttribute("class", "home");
    home.innerHTML = '<i class="fas fa-home"></i>'
    controls.appendChild(home)
}

export function createMenu() {
    const container = document.querySelector(".container");
    const menu = document.createElement("div");
    menu.setAttribute("class", "menu")
    container.appendChild(menu);

    const textContainer = document.createElement("div");
    textContainer.setAttribute("class", "textContainer");
    menu.appendChild(textContainer);

    const today = document.createElement("span");
    today.setAttribute("class", "tablink menuText active");
    today.setAttribute("id", "today");
    today.innerHTML = '<i class="fas fa-calendar-day"></i>&nbsp;&nbsp;Today'
    textContainer.appendChild(today)

    const upcoming = document.createElement("span");
    upcoming.setAttribute("class", "tablink menuText");
    upcoming.setAttribute("id", "upcoming");
    upcoming.innerHTML = '<i class="fas fa-calendar-alt"></i>&nbsp;&nbsp;Upcoming'
    textContainer.appendChild(upcoming)

    const projectContainer = document.createElement("div");
    projectContainer.setAttribute("class", "projectContainer");
    menu.appendChild(projectContainer);

    const projects = document.createElement("span");
    projects.setAttribute("class", "projectText");
    projects.innerHTML = '<i class="fas fa-caret-right"></i>&nbsp;&nbsp;Projects';
    projectContainer.appendChild(projects)

    const createBtn = document.createElement("span");
    createBtn.setAttribute("class", "createBtn");
    createBtn.innerHTML = '<i class="fas fa-plus"></i>'
    projectContainer.appendChild(createBtn)

    const nprojects = document.createElement("span");
    nprojects.setAttribute("class", "projects");
    projectContainer.appendChild(nprojects)

}


export function createList() {
    const container = document.querySelector(".container");
    let n = new Date();
    let d = n.getDate();
    /*Today*/
    const list = document.createElement("div")
    list.setAttribute("class", "tabcontent page")
    list.setAttribute("id", "Today")
    container.appendChild(list)

    const title = document.createElement("div");
    title.setAttribute("class", "theTitle")
    title.innerHTML = `Today`
    list.appendChild(title)

    const date = document.createElement("div");
    date.setAttribute("id", "date")
    date.innerHTML = `${d}`
    title.appendChild(date)

    const taskList = document.createElement("a");
    taskList.setAttribute("class", "taskList");
    list.appendChild(taskList);


    /*Upcoming*/
    const list1 = document.createElement("div")
    list1.setAttribute("class", "tabcontent page")
    list1.setAttribute("id", "Upcoming")
    list1.setAttribute("style", "display:none");
    container.appendChild(list1)

    const title1 = document.createElement("div");
    title1.setAttribute("class", "theTitle")
    title1.innerHTML = `Upcoming`
    list1.appendChild(title1)

    const date1 = document.createElement("div");
    date1.setAttribute("id", "date")
    date1.innerHTML = `${d}`
    title1.appendChild(date1)

    const taskList1 = document.createElement("a");
    taskList1.setAttribute("class", "taskList1");
    list1.appendChild(taskList1);

    /*projects*/
    const list2 = document.createElement("div")
    list2.setAttribute("class", "tabcontent1 page")
    list2.setAttribute("style", "display:none");
    container.appendChild(list2)

    const title2 = document.createElement("div");
    title2.setAttribute("class", "theTitle2")
    title2.innerHTML = `projects123`
    list2.appendChild(title2)

    const date2 = document.createElement("div");
    date2.setAttribute("id", "pdate")
    date2.innerHTML = `${d}`
    title2.appendChild(date2)

    const taskList2 = document.createElement("a");
    taskList2.setAttribute("class", "taskList1");
    list2.appendChild(taskList2);

    /*Buttons*/

    const addTask = document.createElement("a");
    addTask.setAttribute("class", "addTask");
    container.appendChild(addTask)


    const addIcon = document.createElement("span")
    addIcon.setAttribute("class", "addIcon")
    addIcon.innerHTML = '<i class="fas fa-plus"></i>';
    addTask.appendChild(addIcon)

    const addTodo = document.createElement("input");
    addTodo.setAttribute("type", "text");
    addTodo.setAttribute("class", "todo-input");
    addTodo.setAttribute("placeholder", "New Task");
    addTask.appendChild(addTodo);

    const addDate = document.createElement("input");
    addDate.setAttribute("class", "todo-date");
    addDate.setAttribute("type", "date");
    addDate.setAttribute("placeholder", "mm/dd/yyyy");
    addTask.appendChild(addDate);

    const submit = document.createElement("button");
    submit.setAttribute("class", "submit");
    submit.innerText = "Add Task"
    addTask.appendChild(submit);


    const createModal = document.createElement("div");
    createModal.setAttribute("id", "myModal");
    createModal.setAttribute("class", "modal");
    container.appendChild(createModal)

    const createModal1 = document.createElement("div");
    createModal1.setAttribute("class", "modal-content");
    createModal.appendChild(createModal1)

    const createModal2 = document.createElement("div");
    createModal2.setAttribute("class", "modal-header");
    createModal1.appendChild(createModal2)

    const createModal3 = document.createElement("span");
    createModal3.setAttribute("class", "close");
    createModal3.innerHTML = '&times;';
    createModal2.appendChild(createModal3)

    const createModal4 = document.createElement("h2");
    createModal4.innerHTML = 'Add Project';
    createModal2.appendChild(createModal4)

    const createModal5 = document.createElement("div");
    createModal5.setAttribute("class", "modal-body");
    createModal5.innerHTML = '<input type="text" class="project-input" placeholder="Add Project"></input>';
    createModal1.appendChild(createModal5)

    const createModal6 = document.createElement("div");
    createModal6.setAttribute("class", "modal-footer");
    createModal6.innerHTML = '<input class="createProject" type="submit" value="Create">';
    createModal1.appendChild(createModal6);
}

