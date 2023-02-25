// ==== Selectors ====
let getValueInput = document.querySelector(".form__input")
let getButtonAdd = document.querySelector(".form__icon")
let getTodoItems = document.querySelector(".todo__items")
let getSelectItems = document.querySelector(".form__select")


// ==== Events ====
getButtonAdd.addEventListener("click", _add)
getTodoItems.addEventListener("click", _checkAndRemove)
getSelectItems.addEventListener("click", _filter)
getValueInput.focus()


// ==== Functions ====
function _add() {
    if (getValueInput.value === "") {
        alert("Please Enter SomeThing ...")
        getValueInput.focus()
    }
    else {
        let createTodoBox = document.createElement("div")
        createTodoBox.classList.add("todo__box")
        createTodoBox.innerHTML =
            `
            <p class="todo__text">${getValueInput.value}</p>
            <div class="todo__btns">
                <i class='todo__icon check bx bx-check-square'></i>
                <i class='todo__icon trash bx bx-trash'></i>
            </div>
        `
        getTodoItems.appendChild(createTodoBox)
        getValueInput.value = ""
        getValueInput.focus()
    }
}

function _checkAndRemove(e) {
    let getClassNames = e.target.classList[1]
    if (getClassNames === "check") {
        let getParentElement = e.target.parentElement.parentElement
        getParentElement.classList.toggle("checked")
    }
    else if (getClassNames === "trash") {
        e.target.parentElement.parentElement.remove()
    }
}

function _filter(e) {
    let getTargetValue = e.target.value
    let convertToArray = [...getTodoItems.children]

    switch (getTargetValue) {
        case "all":
            convertToArray.forEach(todo => {
                todo.style.display = "flex"
            })
            break;
        case "completed":
            convertToArray.forEach(todo => {
                if (todo.classList.contains("checked")) {
                    todo.style.display = "flex"
                }
                else {
                    todo.style.display = "none"
                }
            })
            break;
        case "uncompleted":
            convertToArray.forEach(todo => {
                if (!todo.classList.contains("checked")) {
                    todo.style.display = "flex"
                }
                else {
                    todo.style.display = "none"
                }
            })
            break;
    }
}