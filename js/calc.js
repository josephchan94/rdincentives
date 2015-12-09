function calc() {
  num1 = parseFloat(document.getElementById('employee').value) || 0,
  num2 = parseFloat(document.getElementById('annualWage').value) || 0,
  num3 = parseFloat(document.getElementById('annualRev').value) || 0,
  // retrieves the result element
  added = document.getElementById('result');
  added.textContent = num1+num2+num3;
  console.log(added.textContent);
}
