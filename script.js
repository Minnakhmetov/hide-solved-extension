function updateTable(hide) {
    console.log("updateTable called with hide=" + hide);
    let new_display = hide ? "none" : "table-row";
    let table_rows = document.getElementsByClassName("contests-table")[0].querySelectorAll("tr");

    for (let i = 0; i < table_rows.length; i++) {
        if (table_rows.item(i).getElementsByClassName("notice small").length > 0) {
            table_rows.item(i).style.display = new_display;
        }
    }
}

let checkbox = document.createElement("input"),
    label = document.createElement("label");

checkbox.setAttribute("type", "checkbox");
checkbox.id = "hide_solved_checkbox";
checkbox.style.float = "right";

label.setAttribute("for", checkbox.id);
label.innerText = "Hide solved contests";
label.style.color = "#3B5998";
label.style.fontWeight = "bold";
label.style.fontSize = "0.8em";

document.getElementById("sidebar").appendChild(label);
document.getElementById("sidebar").appendChild(checkbox);


checkbox.addEventListener("change", function() {
    chrome.storage.sync.set({"checked": checkbox.checked});
    console.log("Storage got " + checkbox.checked);
    updateTable(checkbox.checked); 
});


