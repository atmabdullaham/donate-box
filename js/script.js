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

 })
}

mainTask("shahid")
mainTask("gaza")
mainTask("flood")
mainTask("cloth")