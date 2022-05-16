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
// Tracking tasks count
let washBool = true
let mowBool = true
let pullBool = true

// Set event listener on buttons
washBtn.addEventListener("click", function () {
  if (washBool) {
    tasksRequested.unshift(services[0])
    totalAmount += tasksRequested[0].price
    notification.innerHTML = `<p class="notification-green">${tasksRequested[0].name} has been added successfully</p>`
    washBool = false
    renderServices()
  } else {
    notification.innerHTML = `<p class="notification-orange">You already have this on your list!</p>`
  }
})

mowBtn.addEventListener("click", function () {
  if (mowBool) {
    tasksRequested.unshift(services[1])
    totalAmount += tasksRequested[0].price
    notification.innerHTML = `<p class="notification-green">${tasksRequested[0].name} has been added successfully</p>`
    mowBool = false
    renderServices(tasksRequested)
  } else {
    notification.innerHTML = `<p class="notification-orange">You already have this on your list!</p>`
  }
})

pullBtn.addEventListener("click", function () {
  if (pullBool) {
    tasksRequested.unshift(services[2])
    totalAmount += tasksRequested[0].price
    notification.innerHTML = `<p class="notification-green">${tasksRequested[0].name} has been added successfully</p>`
    pullBool = false
    renderServices(tasksRequested)
  } else {
    notification.innerHTML = `<p class="notification-orange">You already have this on your list!</p>`
  }
})

// Set up remove btn
// if (washBool) {
//   delBtn.addEventListener("click", function (i) {
//     tasksRequested.splice(0, 1)
//     totalAmount -= tasksRequested[0].price
//     renderServices(tasksRequested)
//   })
// }

sendBtn.addEventListener("click", function () {
  tasksRequested = []
  totalAmount = 0
  notification.innerHTML = `<p class="notification-green">The invoice has been sended successfully</p>`
  washBool = true
  pullBool = true
  mowBool = true
  renderServices(tasksRequested)
})

function renderServices() {
  let listService = ""
  for (let i = 0; i < tasksRequested.length; ++i) {
    listService += `
      <tr>
        <td class="table-left">
          ${tasksRequested[i].name}
          <button class="remove-btn" id"delBtn">Remove</button>
        </td>
        <td class="table-right"><span class="currency">$</span>${tasksRequested[i].price}</td>
      </tr>
    `
  }
  taskList.innerHTML = listService
  totalEl.innerHTML = "$" + totalAmount
}
