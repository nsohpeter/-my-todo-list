window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const task_list = document.querySelector("#tasks");
    const main = document.querySelector("#main")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const tasks = input.value;

        if (!tasks) {
            alert("please enter your task");
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("task-content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = tasks;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("task-actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        task_list.appendChild(task_el);
        input.value = "";

        task_edit_el.addEventListener("click", () => {
            if (task_edit_el.innerText.toLowerCase() === "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "edit";
            }
        });

        task_delete_el.addEventListener("click", () => {
            task_list.removeChild(task_el);
        });

    });
});