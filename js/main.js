let tipCalculate = () => {
  let billAmount = document.getElementById("billAmount").value;
  billAmount = Number(billAmount);
  let tipPer = document.getElementById("tipPer").value;
  tipPer = Number(tipPer);

  let tipAmount = (billAmount * tipPer) / 100;
  document.getElementById("tipAmount").innerHTML =
    "Tip Amount is : " + tipAmount;

  let output = tipAmount + billAmount;
  document.getElementById("output").innerHTML = "Total Amount: " + output;
};

let resetInputs = () => {
  billAmount = 0;
};
