var addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("Add Button Clicked")
};

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if(completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
};

function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText,false);
};

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
};

function completedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
};

function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
};

var myArray = [];
myArray.push("Something to Store");
myArray.push("Something Else to store");
alert(myArray[0]);
//This will alert "something to store"

var toDoInfo = {
    "task" : "Thing I Need To Do",
    "completed" : false
};

function saveList() {
    var toDos = [];
    for (var i = 0; i < toDoList.children.length;i++) {
        var toDo = toDoList.children.item(i);
        var toDoInfo = {
            "task" : toDo.innerText,
            "completed" : toDo.classList.contains("completed")
        };
        toDos.push(toDoInfo);
    }
    localStorage.setItem("toDos", JSON.stringify(toDos));
    console.log("Masuk sini le!!!")
};

function loadList() {
    if (localStorage.getItem("toDod") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));
        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}
loadList();


// Background berganti-ganti
// Daftar Background
const backgrounds = [
    "linear-gradient(to right, #ffecd2, #fcb69f)",
    "assets/gumball.jpg",
    "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    "assets/bears.jpg",
    "linear-gradient(to right, #fbc2eb, #a6c1ee)",
    "assets/gojo.jpg",
    "linear-gradient(to right, #fad0c4, #ffd1ff)",
    "assets/city.jpeg"
];

let current = 0;
function changeBackground() {
    let bg = backgrounds[current];
    // cek apakah path ini gambar (berakhiran .jpg, .png, dll)
    if (bg.endsWith(".jpg") || bg.endsWith(".png") || bg.endsWith(".jpeg")) {
        document.body.style.background = `url('${bg}') no-repeat center center fixed`;
        document.body.style.backgroundSize = "cover";
    } else {
        document.body.style.background = bg; // kalau gradient, langsung pakai
    }
    current = (current + 1) % backgrounds.length;
}

// panggil pertama kali
changeBackground();

// ubah setiap 5 detik
setInterval(changeBackground, 5000);
