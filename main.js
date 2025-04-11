let removeText = document.querySelector(".remove-text");
let todo = document.querySelector(".todo");
let ul = document.querySelector("ul");
let addTodo = document.querySelector(".addToDo");
let addBtn = document.querySelector(".ending");

removeText.addEventListener("click", () => {
    todo.value = "";
});

addBtn.addEventListener("click", () => {
    if (addTodo.style.display === "none") {
        addTodo.style.display = "flex";
        todo.focus();
        return;
    }

    if (todo.value.trim() !== "") {
        let li = document.createElement("li");
        li.classList.add("list");
        li.innerHTML = `
            <div>${todo.value}</div>
            <div class="xmark">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;

        ul.append(li);
        ul.style.display = "flex";
        todo.value = "";
        addTodo.style.display = "none";

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });

        const deleteBtn = li.querySelector(".xmark");
        deleteBtn.addEventListener("click", () => {
            li.remove();
            if (ul.children.length === 0) {
                ul.style.display = "none";
                addTodo.style.display = "flex"; 
            }
        });
    } else {
        Swal.fire("Input is empty!");
    }
});
