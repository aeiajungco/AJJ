var myList = document.getElementsByTagName("li");
var list = document.querySelector("ul");
var addTask = document.getElementById("addBtn");

addTask.addEventListener ("click", function () {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputTask").value;
    li.appendChild(document.createTextNode(inputValue));

    inputValue = inputValue.replace(/^\s+/, "").replace(/\s+$/, "");
        if (inputValue === "")
            alert("Please input at least 1 Task. :)");
    
    else
        document.getElementById("taskList").appendChild(li);
    
    document.getElementById("inputTask").value = "";

    delBtn(li);
});

list.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("done");
    }
}, false);

function delBtn (parent) {
    var del = parent.appendChild(document.createElement("button"));
    del.innerText = "REMOVE";
    del.className = "remove";
    del.addEventListener ("click", function () {
        this.parentElement.remove();
    })
}