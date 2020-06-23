import { createHeader, createMenu, createList } from "./ui/display.js";
import { addButton, createButton, upcomingTasks, createProject } from "./functions/createTask.js";
import { show } from "./functions/viewPage.js";
import { storedList, removeItems } from "./functions/storedList.js";



createHeader();
createMenu();
createList();
addButton();
createButton();
createProject();
upcomingTasks();
show();
storedList();
removeItems();