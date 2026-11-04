let page = document.querySelector(".page");
let darkBtn = document.querySelector(".darkbtn");
let lightBtn = document.querySelector(".lightbtn");

darkBtn.addEventListener("click", () => {
  page.classList.add("dark-theme");
});

lightBtn.addEventListener("click", () => {
  page.classList.remove("dark-theme");
});

// CRUD
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userMobile = document.querySelector("#userMobile");
let adduserbtn = document.querySelector("#adduserbtn");
let adduserClean = document.querySelector("#adduserbtnClear");
let inputBox = document.querySelector(".inputBox");

let userTableBox = document.querySelector("#userTableBox");

let count = 0;

adduserbtn.addEventListener("click", () => {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td"); 

  count++;

  td1.textContent = count;
  td3.textContent = userName.value
  td3.textContent = userEmail.value;
  td4.textContent = userMobile.value;
  td5.innerHTML = `
    <button class="editBtn" title="Edit">
        <i class="ri-edit-line"></i>
    </button>

    <button class="deleteBtn" title="Delete">
        <i class="ri-delete-bin-line"></i>
    </button>
`;

  tr.append(td1, td2, td3, td4, td5);
  userTableBox.append(tr);

  // tdName.textContent = userName.value;
  // tdEmail.textContent = userEmail.value;
  // tdMobile.textContent = userMobile.value;
});

adduserClean.addEventListener("click", () => {
  userName.value = "";
  userEmail.value = "";
  userMobile.value = "";
});
