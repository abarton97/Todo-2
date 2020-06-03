import { createHeader, createMenu, createList } from "./ui/display.js";
import { addButton, createButton, upcomingTasks } from "./functions/createTask.js";
import { show } from "./functions/viewPage.js";



createHeader();
createMenu();
createList();
addButton();
createButton();
upcomingTasks();
show();