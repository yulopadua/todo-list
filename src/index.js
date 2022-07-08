import { createToDo } from "./createToDo";
import { blankProjectLoad } from "./blankProjectLoad";
import { displayDefaultProject, displayTheForm, addItemToChecklist, clearForm } from "./domManip";
import './style.css';

//call blankProjectLoad on first load
blankProjectLoad();

//click events module
let clickEventsModule = (function() {
    //click event for displaying the form
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    //click event for adding an item to the checklist on the form 
    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToChecklist);

    //click event to clear the form
    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);
})();