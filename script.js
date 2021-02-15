var containerEle = document.body.querySelector(".container");

var billTotal = Number(prompt("What is your total bill?"));

var billFinal = (billTotal*1.07)*1.05;

containerEle.innerHTML = ("Your bill is ") + billFinal + ("!");