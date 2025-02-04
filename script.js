const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
        addTodo(this.value.trim());
        this.value = "";
    }
});

const addTodo = (todoText) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${todoText}
        <i class="fa-solid fa-xmark"></i>
    `;

    // Toggle 'done' class when clicking the text
    listItem.addEventListener("click", function () {
        this.classList.toggle("done");
    });

    // Remove item when clicking the delete icon
    listItem.querySelector("i").addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents triggering the 'done' toggle
        listItem.remove();
    });

    toDoBox.appendChild(listItem);
};
