document.addEventListener("DOMContentLoaded", () => {
    const noteInput = document.getElementById("note-input");
    const addButton = document.getElementById("add-button");
    const noteList = document.getElementById("note-list");
    const saveButton = document.getElementById("save-button");

    const getDayName = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[new Date().getDay()];
    };

    const addNote = () => {
        const noteText = noteInput.value.trim();
        if (noteText === "") {
            alert("Please enter a note!")
            return;
        }

        const listItem = document.createElement("li");
        listItem.textContent = noteText;
        noteList.appendChild(listItem);
        noteInput.value = "";
    };

    const saveNotes = () => {
        const notes = [];
        noteList.querySelectorAll("li").forEach((item) => {
            notes.push(item.textContent);
        });

        if (notes.length === 0) {
            alert("Your notes list is empty!");
            return;
        }

        const content = notes.join("\n");
        const filename = `${getDayName()}.txt`;
        const blob = new Blob([content], {type: "text/plan"});
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }
    
    addButton.addEventListener("click", addNote);
    saveButton.addEventListener("click", saveNotes);

    noteInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addNote();
        }
    });

});