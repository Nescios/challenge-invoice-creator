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
// const delBtn = document.getElementById("del-btn")
const rmvWashBtn = document.getElementById("rmv-wash-btn")
const rmvMowBtn = document.getElementById("rmv-mow-btn")
const rmvPullBtn = document.getElementById("rmv-pull-btn")
const totalEl = document.getElementById("total-el")
const sendBtn = document.getElementById("send-btn")
// Tracking tasks rendered
let washRender = false
let mowRender = false
let pullRender = false

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

// // Set up remove btn
// if (washRender) {
//   // const delBtn = document.getElementById("del-btn")
//   rmvWashBtn.addEventListener("click", function () {
//     const indexOf = tasksRequested.indexOf(services[0])
//     tasksRequested.splice(indexOf, 1)
//     renderServices(tasksRequested)
//   })
// }

// if (mowRender) {
//   rmvMowBtn.addEventListener("click", function () {
//     const indexOf = tasksRequested.indexOf(services[1])
//     tasksRequested.splice(indexOf, 1)
//     renderServices(tasksRequested)
//   })
// }

// if (pullRender) {
//   rmvPullBtn.addEventListener("click", function () {
//     const indexOf = tasksRequested.indexOf(services[2])
//     tasksRequested.splice(indexOf, 1)
//     renderServices(tasksRequested)
//   })
// }

sendBtn.addEventListener("click", function () {
  tasksRequested = []
  totalAmount = 0
  notification.innerHTML = `<p class="notification-blue">Invoice has been sended successfully</p>`
  washRender = false
  pullRender = false
  mowRender = false
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

console.log(washRender)