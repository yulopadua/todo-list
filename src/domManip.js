import { blankProjectLoad } from "./blankProjectLoad";

//DOM manipulation to display the UI components
export function displayDefaultProject () {
    //DOM for the default project load
    const projectsInfoDiv = document.createElement("div");
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}

export function displayTheForm() {
    document.getElementById("add-todo-form").style.display = "";
}

export function addItemToChecklist() {
    const addItem = document.getElementById("add-to-checklist").value;

    //Run check to see if the input box is empty and button was clicked
    //If so, return out of this function
    //If not, apply contents to new li in DOM
    if (addItem != "") {
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.textContent = addItem;
        const span = document.createElement("span");
        span.className = "remove-checklist-item";
        const removeIcon =  document.createTextNode("\u00D7");
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById("add-to-checklist").value = "";

        //DOM check for existing check list items already present
        if (document.querySelector("li").length > 0) {
            const nodeListChecklist = document.querySelectorAll("li");

            //DOM to bind click event to each node in nodelist and remove node if clicked
            nodeListChecklist.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItemFromChecklist() {
                    checkListItem.remove();
                });
            })
        }
    } else return;
}

export function clearForm() {
    const nodeListChecklist = document.querySelectorAll("li");
    for (let i = 0; i < nodeListChecklist.length; i++) {
        nodeListChecklist[i].remove();
    }
    document.getElementById("add-todo").reset();
}