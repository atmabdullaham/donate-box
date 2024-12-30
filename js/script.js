// Input value Hunter
function inputValueHunter(id) {
 return parseFloat(document.getElementById(id).value)
}

// Inner Text Hunter
function innerTextHunter(id) {
 return parseFloat(document.getElementById(id).innerText)
}
// set innerText
function setInnerText(id, text) {
 document.getElementById(id).innerText = text
}

// function for remove class
function removeClass(id, className) {
 document.getElementById(id).classList.remove(className);
}


function mainTask(id) {
 document.getElementById(id + "-button").addEventListener("click", function (event) {
  event.preventDefault()
  const balance = innerTextHunter("balance")
  const donationAmount = innerTextHunter(id + "-balance")
  const donationInput = inputValueHunter(id + "-input")
  const newBalance = balance - donationInput;
  const newdonationAmount = donationInput + donationAmount
  console.log(balance, donationAmount, donationInput)
  setInnerText("balance", newBalance)
  setInnerText(id + "-balance", newdonationAmount)

  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500"

  historyItem.innerHTML = `
  
  
  <p class="text-xs text-gray-700"> ${new Date().toLocaleDateString()} </p>
  <p class="text-md text-gray-700"> Balance ${newBalance.toFixed(2)} </p>
  <p class="text-xs text-gray-700"> Expenses ${donationInput.toFixed(2)} </p>
  <p class="text-xs text-gray-700"> Balance ${newdonationAmount.toFixed(2)} </p>
  
 `
  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild)
  removeClass("history-section", "hidden")
 })
}

mainTask("shahid")
mainTask("gaza")
mainTask("flood")
mainTask("cloth")