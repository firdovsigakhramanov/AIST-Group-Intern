let createFolderBtn = document.querySelector(".header__create-btn");
let createWindow = document.querySelector(".create-window");
let folderContainer = document.querySelector(".folder-container");
let folderDeleteAndRenameBtns = document.querySelector(".header__other-btns");
let headerFolderName = document.querySelector(".header__folder-name");
let url = new URL(window.location.href);
let searchParams = url.searchParams.get("folder");

let count = JSON.parse(localStorage.getItem("count")) || 0;
let data = JSON.parse(localStorage.getItem("data")) || [];

// findFolder = data.find((item) => item.id == searchParams);
// findFolder.children.push("");

// console.log(findFolder);

createFolderBtn.addEventListener("click", (e) => {
  let createWindowCloseIcon = document.querySelector(".fa-x");
  let createFolderForm = document.querySelector(".create-tab__form");
  let createWindowInput = document.querySelector("#create-tab__input");
  let createTabEmptyError = document.querySelector(".create-tab__empty-input");

  createWindow.classList.add("active");
  createFolderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    count += 1;
    const newFolder = {
      id: count,
      name: createWindowInput.value,
      children: [],
    };
    let url = new URL(window.location.href);
    let searchParams = url.searchParams.get("folder");

    if (createWindowInput.value !== "" && url.searchParams.size == 0) {
      data.push(newFolder);
      createWindowInput.value = "";
      getData(data);
    } else if (url.searchParams.size !== 0) {
      findFolder = data.find((item) => item.id == searchParams);
      findFolder?.children.push(newFolder);
      getData(findFolder.children);
    } else if (createWindowInput.value == "") {
      createTabEmptyError.classList.add("active");
    }
    createWindow.classList.remove("active");

    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("count", count);
  });
  createWindowCloseIcon.onclick = function (e) {
    createWindow.classList.remove("active");
  };
});

getData(data);

function getData(data) {
  folderContainer.innerHTML = "";
  data.map((folder) => {
    folderContainer.innerHTML += `
      <button data-id="${folder.id}" class="folder-block target" ondblclick=getFolder(${folder.id}) onclick=selectFolder(this,${folder.id})>
            <i  class="fa-solid fa-folder target"></i>
            <p class="folder-name target">${folder.name}</p>
      </button>
    `;
  });
}

function getFolder(id) {
  findItem = data.find((item) => item.id == id);
  url.searchParams.set("folder", id);
  window.history.replaceState({}, "", url);

  getData(findItem.children);
}

function selectFolder(folderBlock, id) {
  let folders = document.querySelectorAll(".folder-block");
  let findFolder = data.find((item) => item.id == id);
  createFolderBtn.classList.remove("active");
  folderDeleteAndRenameBtns.classList.add("active");
  headerFolderName.classList.add("active");

  headerFolderName.innerHTML = findFolder.name;
  folders.forEach((folder) => {
    folder.classList.remove("active");
  });
  folderBlock.classList.add("active");

  document.body.addEventListener("click", function (e) {
    if (!e.target.classList.contains("target")) {
      folderDeleteAndRenameBtns.classList.remove("active");
      createFolderBtn.classList.add("active");
      headerFolderName.classList.remove("active");
      folders.forEach((folder) => {
        folder.classList.remove("active");
      });
    } else if (e.target.classList.contains("target")) {
      createFolderBtn.classList.remove("active");
      folderDeleteAndRenameBtns.classList.add("active");
      headerFolderName.classList.add("active");
    }
  });
}
