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

// function for add class
function addClass(id, className) {
  document.getElementById(id).classList.add(className);
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
    console.log(donationInput)
    if (donationInput <= 0 || balance < 0 || newBalance < 0 || donationInput.toString() === "NaN") {
      alert("Invalid Donation Amount")
    } else {

      setInnerText("balance", newBalance)
      setInnerText(id + "-balance", newdonationAmount);
      const donationTitle = titleHunter(id + "-title")
      // Modal
      document.getElementById("my_modal_5").showModal()
      addClass("history-title", "hidden")
      // date and time
      const now = new Date();
      const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short"
      };
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(now);
      const timezoneName = "Bangladesh Standard Time";
      const result = `Date : ${formattedDate} (${timezoneName})`;
      const historyItem = document.createElement("div");
      historyItem.className = "bg-white p-3 rounded-md border-l-2 border-lime-300"

      historyItem.innerHTML = `
  
   <p class="text-gray-700 font-bold text-xl">${donationInput} Taka is Donated for ${donationTitle} </p>
  <p class="text-base font-light  text-gray-700"> ${result} </p> 
 `
      const historyContainer = document.getElementById("history-list");
      historyContainer.insertBefore(historyItem, historyContainer.firstChild)
    }
  })
}
mainTask("shahid")
mainTask("gaza")
mainTask("flood")
mainTask("cloth")

// History button
document.getElementById("history-button").addEventListener("click", function () {
  removeClass("history-section", "hidden")
  removeClass("donation-button", "bg-lime-300")

  addClass("donation-section", "hidden")
  addClass("history-button", "bg-lime-300")
})
// donation button
document.getElementById("donation-button").addEventListener("click", function () {
  addClass("history-section", "hidden")
  removeClass("donation-section", "hidden")
  removeClass("history-button", "bg-lime-300")
  addClass("donation-button", "bg-lime-300")
})
document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "./blog.html";
})