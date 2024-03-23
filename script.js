const api = "https://v6.exchangerate-api.com/v6/0b2c94015ff32fce2aedc4c7/pair";

let amount = document.getElementById("amount");
let result = document.getElementById("result");
let from = document.getElementById("from");
let to = document.getElementById("to");
let time = document.getElementById("time");

from.addEventListener("change", (event) => {
  let selectedItem = event.target.value;
  from = selectedItem;
});
to.addEventListener("change", (event) => {
  let selectedItem = event.target.value;
  to = selectedItem;
});

let options = document.querySelectorAll(".input-group select");

for (option of options) {
  for (code in countryList) {
    let newOption = document.createElement("option");
    newOption.value = code;
    newOption.innerText = code;
    option.append(newOption);
  }
}

function convert() {
  if (amount.value <= 0) {
    console.log("Enter valid number");
    amount.value = "0";
  } else {
    console.log(amount.value);

    console.log("From: " + from);
    console.log("To: " + to);

    const URL = `${api}/${from}/${to}`;

    async function apiCall() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      result.value =(amount.value * jsonResponse.conversion_rate).toFixed(2) ;
      time.innerText = jsonResponse.time_last_update_utc;
    }
    apiCall();
  }
}
