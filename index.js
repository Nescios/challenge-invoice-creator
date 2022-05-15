// Data
let services = [
  { name: "Wash Car", price: 10 },
  { name: "Mow Lawn", price: 20 },
  { name: "Pull Weeds", price: 30 },
]
let tasksRequested = []
let totalAmount = 0
// Get Elements in DOM
const notification = document.getElementById("notification")
const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const taskList = document.getElementById("task-list")
const delBtn = document.getElementById("del-btn")
const totalEl = document.getElementById("total-el")
const sendBtn = document.getElementById("send-btn")
const servicesFromLocalStorage = localStorage.getItem("betaServices")

let betaServices = []

if (servicesFromLocalStorage) {
  betaServices = servicesFromLocalStorage
  renderServices(betaServices)
}

washBtn.addEventListener("click", function () {
  tasksRequested.push(services[0])
  totalAmount += tasksRequested[0].price
  // localStorage.setItem("betaServices", JSON.stringify(betaServices))
  // task = JSON.stringify(betaServices[0].name)
  renderServices()
})

mowBtn.addEventListener("click", function () {
  tasksRequested.push(services[1])
  totalAmount += tasksRequested[1].price
  // localStorage.setItem("betaServices", JSON.stringify(betaServices))
  // task = JSON.stringify(betaServices[1].name)
  renderServices(tasksRequested)
})

pullBtn.addEventListener("click", function () {
  tasksRequested.push(services[2])
  totalAmount += tasksRequested[2].price
  // localStorage.setItem("betaServices", JSON.stringify(betaServices))
  // task = JSON.stringify(betaServices[2].name)
  renderServices(tasksRequested)
})

delBtn.addEventListener("click", function () {
  // localStorage.removeItem("betaServices")
  tasksRequested.splice(1, 1)
  totalAmount -= tasksRequested[0].price
  renderServices(betaServices)
})

sendBtn.addEventListener("click", function () {
  // localStorage.clear()
  tasksRequested = []
  renderServices(tasksRequested)
})


function renderServices() {
  let listService = ""
  for (let i = 0; i < tasksRequested.length; ++i) {
    listService += `
      <tr>
        <td>${tasksRequested[i].name}</td><button id"delBtn">Remove</button>
        <td>${tasksRequested[i].price}</td>
      </tr>
    `
  }
  taskList.innerHTML = listService
  totalEl.textContent = totalAmount
}

