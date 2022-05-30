// Data
let services = [
  { id: 0, name: "Wash Car", price: 10 },
  { id: 1, name: "Mow Lawn", price: 20 },
  { id: 2, name: "Pull Weeds", price: 30 },
]
let tasksRequested = []
let totalAmount = 0
// Get Elements in DOM
const notification = document.getElementById("notification")
const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const taskList = document.getElementById("task-list")
const delBtn = document.querySelectorAll("#task button")
const totalEl = document.getElementById("total-el")
const sendBtn = document.getElementById("send-btn")
// Tracking tasks rendered
// let tasksRender = {
//   wash: false,
//   mow: false,
//   pull: false
// }
let washRender = false
let mowRender = false
let pullRender = false

// washBtn.addEventListener("click", getTasksHtml(0))
// mowBtn.addEventListener("click", getTasksHtml(1))
// pullBtn.addEventListener("click", getTasksHtml(2))

// function getTasksHtml(id) {
//   if (!tasksRender[id]) {
//     tasksRequested.unshift(services[id])
//     totalAmount += tasksRequested[id].price
//     notification.innerHTML = `<p class="notification-green">${tasksRequested[id].name} has been added successfully</p>`
//     washRender = true
//     renderServices()
//   } else {
//     notification.innerHTML = `<p class="notification-orange">You already have this on your list!</p>`
//   }
// }

// Set event listener on buttons
washBtn.addEventListener("click", function () {
  if (!washRender) {
    tasksRequested.unshift(services[0])
    totalAmount += tasksRequested[0].price
    notification.innerHTML = `<p class="notification-green">${tasksRequested[0].name} has been added successfully</p>`
    washRender = true
    renderServices()
  } else {
    notification.innerHTML = `<p class="notification-orange">You already have this on your list!</p>`
  }
})

mowBtn.addEventListener("click", function () {
  if (!mowRender) {
    tasksRequested.unshift(services[1])
    totalAmount += tasksRequested[0].price
    notification.innerHTML = `<p class="notification-green">${tasksRequested[0].name} has been added successfully</p>`
    mowRender = true
    renderServices(tasksRequested)
  } else {
    notification.innerHTML = `<p class="notification-orange">You already have this on your list!</p>`
  }
})

pullBtn.addEventListener("click", function () {
  if (!pullRender) {
    tasksRequested.unshift(services[2])
    totalAmount += tasksRequested[0].price
    notification.innerHTML = `<p class="notification-green">${tasksRequested[0].name} has been added successfully</p>`
    pullRender = true
    renderServices(tasksRequested)
  } else {
    notification.innerHTML = `<p class="notification-orange">You already have this on your list!</p>`
  }
})

sendBtn.addEventListener("click", function () {
  if (tasksRequested.length === 0) {
    notification.innerHTML = `<p class="notification-red">You have no tasks on your list!</p>`
  } else {
    tasksRequested = []
    totalAmount = 0
    notification.innerHTML = `<p class="notification-blue">Invoice has been sended successfully</p>`
    washRender = false
    pullRender = false
    mowRender = false
    renderServices(tasksRequested)
  }
})

function removeTask(id) {
  let index = tasksRequested.findIndex((task) => task.id === id)
  if (index === 0) {
    washRender = false
  } else if (index === 1) {
    mowRender = false
  } else if (index === 2) {
    pullRender = false
  }
  totalAmount -= tasksRequested[index].price
  tasksRequested.splice(index, 1)
  renderServices(tasksRequested)
}

function renderServices() {
  let listService = ""
  for (let i = 0; i < tasksRequested.length; ++i) {
    listService += `
      <tr>
        <td class="table-left">
          ${tasksRequested[i].name}
          <button class="remove-btn" id"delBtn" onclick="removeTask(${tasksRequested[i].id})">Remove</button>
        </td>
        <td class="table-right"><span class="currency">$</span>${tasksRequested[i].price}</td>
      </tr>
    `
  }
  taskList.innerHTML = listService
  totalEl.innerHTML = "$" + totalAmount
}
