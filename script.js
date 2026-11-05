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
  td2.textContent = userName.value;
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
  form.reset();
});

adduserClean.addEventListener("click", () => {
  userName.value = "";
  userEmail.value = "";
  userMobile.value = "";
});

// Color Generate

let colorCard = document.querySelectorAll(".colorCard");

colorCard.forEach((card)=>{

  let colorBtn = card.querySelector("#randomColor");
  let copyCode = card.querySelector("#copy");
  let cards = card.querySelector(".cardFeatures");
  
  colorBtn.addEventListener("click", () => {
    let randomColors = Math.floor(Math.random() * 16777215);
  
    let hexColor = "#" + randomColors.toString(16).padStart(6, "0");
  
    cards.style.backgroundColor = hexColor;
    cards.classList.add(hexColor)
    copyCode.textContent = hexColor;
  
    console.log(hexColor);
  });
})
