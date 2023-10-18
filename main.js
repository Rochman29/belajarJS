// console.log("Hello World");
// alert("Ada Notifikasi");
// prompt("Pinjam Seratus");

// var Promnet = "Coding is Easy";
// console.log(Promnet);
// var Promnet = "Coding is not Easy";
// console.log(Promnet);
// var Promnet = "nothing is possible";
// console.log(Promnet);

// let Promnet = "Coding is Fun";
// console.log(Promnet);
// let Promnet = "Coding is not Fun";
// console.log(Promnet);

// const Promnet = "Coding is My Life";
// console.log(Promnet);
// const Promnet = "Coding is not My Life";
// console.log(Promnet);

// let totalPoint = prompt("Masukkan Poin Anda: ");
// if (totalPoint >= 100) {
//   document.write("Congratulation");
// } else {
//   document.write("Keep Trying");
// }
// let x = 6;
// let y = 3;

// console.log(x < 10 && y > 1);
// console.log(x < 10 && y < 1);
// console.log(x == 5 || y == 5);
// console.log(x == 6 || y == 5);
// console.log(!(x == y));

// document.write(x < 10 && y > 1);
// document.write("<br>");
// document.write(x < 10 && y < 1);
// document.write("<br>");
// document.write(x == 5 || y == 5);
// document.write("<br>");
// document.write(x == 6 || y == 5);
// document.write("<br>");
// document.write(!(x == y));
// let p = document.querySelector("p");
// let button = document.querySelector("button");
// let input = document.querySelector("input");

// button.addEventListener("click", function () {
//   let isi = input.value;
//   console.log(isi);
//   p.innerHTML = isi;
// });

let dataNotes = [];

const addNote = () => {
  let userInputData = document.getElementById("input_form");
  let userInputValue = userInputData.value;

  if (userInputValue !== "" && userInputValue !== null) {
    dataNotes.push({ text: userInputValue, completed: false });
    userInputData.value = "";

    showNotes();
  }
};

const showNotes = () => {
  let showNotesElement = document.getElementById("listNotes");
  showNotesElement.innerHTML = "";

  dataNotes.forEach((note, index) => {
    let listItem = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = note.completed;
    checkbox.addEventListener("change", () => {
      toggleComplete(index);
    });

    let text = document.createElement("span");
    text.textContent = note.text;
    text.style.textDecoration = note.completed ? "line-through" : "none";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
      deleteNotes(index);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    listItem.appendChild(deleteButton);

    showNotesElement.appendChild(listItem);
  });
};

const toggleComplete = (index) => {
  dataNotes[index].completed = !dataNotes[index].completed;
  showNotes();
};

const deleteNotes = (index) => {
  dataNotes.splice(index, 1);
  showNotes();
};
