let removeText = document.querySelector(".remove-text");
let todo = document.querySelector(".todo");
let ul = document.querySelector("ul");
let addTodo = document.querySelector(".addToDo");
let plus = document.querySelector(".plus");
let addToList = document.querySelector(".add-text");
let sortIcon = document.querySelector(".sortIcons");
let sortAlph = sortIcon.querySelector("i:first-child")
let sortAlphReverse = sortIcon.querySelector("i:last-child")
let listElements = ul.querySelectorAll(".list")
let searchInput=document.querySelector(".search")

removeText.addEventListener("click", () => {
    todo.value = "";
});

plus.addEventListener("click", () => {
    if (addTodo.style.display === "none" || addTodo.style.display === "") {
        addTodo.style.display = "flex";
        todo.focus();
    }
    else if (ul.children.length == 0) {
        addTodo.style.display = "flex"
    } else {
        addTodo.style.display = "none";
    }
});

addToList.addEventListener("click", () => {
    if (todo.value !== "") {
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

        const deleteBtn = li.querySelector(".xmark");
        deleteBtn.addEventListener("click", () => {
            li.remove();
            if (ul.children.length === 0) {
                ul.style.display = "none";
                addTodo.style.display = "flex";
            }
        });
    } else {
        console.log("Add ToDo please");
    }
});
todo.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addToList.click();
    }
});

let flag = true
sortIcon.addEventListener("click", () => {
    flag = !flag

    sortAlphReverse.style.display = flag ? "inline-block" : "none"
    sortAlph.style.display = flag ? "none" : "inline-block"

    const listArr = [...ul.querySelectorAll(".list")]
    listArr.sort((a, b) => {
        let first = a.querySelector("div").textContent.toLowerCase()
        let second = b.querySelector("div").textContent.toLowerCase()
        return flag ? second.localeCompare(first) : first.localeCompare(second)
    })
    ul.innerHTML = "";
listArr.forEach(li => ul.appendChild(li));
})

searchInput.addEventListener("keyup", ()=>{
    let allElements=ul.querySelectorAll(".list")
    allElements.forEach(element=>{
const text= element.querySelector("div").textContent.trim().toLowerCase().includes(searchInput.value.toLowerCase().trim())
element.style.display=text ? "flex" : "none"
    })
})


