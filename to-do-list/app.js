const getToEl = document.querySelector("#landing a")
const taskForm = document.getElementById("task-form");
const taskEl = document.getElementById("task");
let taskList = document.getElementById("task-list");
const taskListItem = document.querySelector("task-list-item");
const taskBtn = document.getElementById("task-btn");
const burgBtn = document.getElementById("burg-wraper");
const menu = document.querySelector(".top-nav");

getToEl.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({
        top: 910,
        behavior: "smooth"
    });
});

let taskListBtn;

function addLiToList(event) {
    event.preventDefault();
    if (!taskEl.value) {
        return;
    } else {
        let taskListElement = taskList.appendChild(document.createElement("li"));
        taskListElement.classList.add("task-list-item");
        let taskListP = taskListElement.appendChild(document.createElement("p"));
        taskListP.textContent = taskEl.value;
        taskListP.classList.add("task-list-p");
        taskListBtn = taskListElement.appendChild(document.createElement("button"));
        taskListBtn.classList.add("task-holder-button");
        taskListBtn.textContent = "DONE!";
        taskEl.value = "";
    }
}

taskBtn.addEventListener("click", addLiToList);

taskList.addEventListener("click", (event) => {
    for (let i = 0; i < taskList.children.length; i++) {
        if (event.target.tagName === 'BUTTON') {
            event.target.parentElement.style.display = "none"
        }
    }
})

function openMenu(event) {
    if (window.innerWidth <= 750) {
        if (menu.style.display === "flex") {
            menu.classList.remove("animate__fadeInDown");
            menu.classList.add("animate__fadeOutUp");

            menu.addEventListener("animationend", function handleAnimEnd() {
                menu.style.display = "none";
                menu.classList.remove("animate__fadeOutUp");
                menu.removeEventListener("animationend", handleAnimEnd);
            });
        } else {
            menu.classList.remove("animate__fadeOutUp")
            menu.style.display = "flex";
            menu.classList.add("animate__fadeInDown");
        }
    }
}

burgBtn.addEventListener("click", openMenu);