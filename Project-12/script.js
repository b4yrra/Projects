const input = document.querySelector(".input");
const submit = document.getElementById("sumbitBtn");
const result = document.querySelector(".result");
const clear = document.getElementById("clearBtn");

let items = [];
let itemId = 1;

const submitValue = () => {
  const value = input.value;

  const item = {
    id: itemId,
    text: value,
  };

  if (editId !== null) {
    items = items.map((item) => {
      if (item.id === editId) {
        return {
          id: item.id,
          text: value,
        };
      } else {
        return item;
      }
    });

    editId = null;
  } else {
    items.push({
      id: itemId++,
      text: value,
    });
  }

  renderTasks();
  clearInput();
};

const renderTasks = () => {
  let itemElementHTML = "";

  let forItems = items;

  forItems.forEach((item) => {
    itemElementHTML += createItems(item);
  });

  console.log(itemElementHTML);

  result.innerHTML = itemElementHTML;
};

const createItems = (item) => {
  return `<div class="space">
            <div class="result-value">${item.text}</div>
            <div class="icons">
              <button class="edit-button" onclick="editItem(${item.id})">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="trash-button" onclick="deleteItem(${item.id})">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>`;
};

const deleteItem = (itemId) => {
  items = items.filter((item) => {
    item.id !== itemId;
  });
  renderTasks();
};

let editId = null;

const editItem = (itemId) => {
  const item = items.find((item) => item.id === itemId);

  input.value = item.text;
  editId = itemId;
};

const clearInput = () => {
  input.value = "";
};

const clearValue = () => {
  items = [];
  renderTasks();
};

submit.addEventListener("click", submitValue);
clear.addEventListener("click", clearValue);
