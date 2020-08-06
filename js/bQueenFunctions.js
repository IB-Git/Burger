const totalIt = () => {
  let input = document.getElementsByName("product");
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementById("total").value = "₹" + total.toFixed(2);
};
