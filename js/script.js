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
// title hunter 
function titleHunter(id) {
 return document.getElementById(id).innerText
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
  setInnerText(id + "-balance", newdonationAmount);
  const donationTitle = titleHunter(id + "-title")

  // date and time
  // Create a new Date object
  const now = new Date();

  // Format options for date and time
  const options = {
   weekday: "short", // Abbreviated day of the week (e.g., Tue)
   year: "numeric",  // Full year (e.g., 2024)
   month: "short",   // Abbreviated month (e.g., Sep)
   day: "2-digit",   // Day with leading zero if necessary
   hour: "2-digit",  // Hour in 2-digit format
   minute: "2-digit", // Minute in 2-digit format
   second: "2-digit", // Second in 2-digit format
   timeZoneName: "short" // Time zone name (e.g., GMT+6)
  };

  // Format the date to match the example
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(now);

  // Adding the "Bangladesh Standard Time" manually
  const timezoneName = "Bangladesh Standard Time";

  // Combine everything
  const result = `Date : ${formattedDate} (${timezoneName})`;


  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500"

  historyItem.innerHTML = `
  
   <p class="text-gray-700 font-bold text-xl">${donationInput} Taka is Donated for ${donationTitle} </p>
  <p class="text-base font-light  text-gray-700"> ${result} </p> 
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