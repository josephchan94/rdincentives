/*
Calculator written by Joseph Chan December 2015
*/

// gives industries values for the selector
var industryValue= new Array();
industryValue["Aerospace"]=	0.1865;
industryValue["Agricultural"]=	0.0813;
industryValue["Apparel"]=	0.1025;
industryValue["Architecture"]=	0.1526;
industryValue["Arms and Defense"]=	0.1905;
industryValue["Automotive"]=	0.2175;
industryValue["Biotechnology / Life Science"]=	0.4279;
industryValue["Brewing"]=	0.1347;
industryValue["Chemicals"]=	0.2025;
industryValue["Construction"]=	0.1263;
industryValue["Consumer Products"]=	0.1550;
industryValue["Contract Manufacturer"]=	0.1512;
industryValue["Cosmetics"]=	0.1487;
industryValue["Electronics"]=	0.2325;
industryValue["Engineering"]=	0.1825;
industryValue["Food"]=	0.0784;
industryValue["Foundries"]=	0.1756;
industryValue["Gaming Technology"]=	0.2412;
industryValue["IT Services"]=	0.1237;
industryValue["Medical Devices "]=	0.2206;
industryValue["Mining"]=	0.0930;
industryValue["Oil & Gas"]=	0.1751;
industryValue["Other Manufacturing "]=	0.1537;
industryValue["Pharmaceuticals"]=	0.3750;
industryValue["Plastic Injection Molding"]=	0.1575;
industryValue["Robotics"]=	0.2875;
industryValue["Semi-Conductor"]=	0.2230;
industryValue["Software Developer"]=	0.3703;
industryValue["Structural Engineering"]=	0.1800;
industryValue["Telecommunications"]=	0.1646;
industryValue["Utilities"]=	0.1350;
industryValue["Waste Management"]=	0.0725;
industryValue["Winemaking"]=	0.1224;

//gets the industry price from the form
function getIndustryPrice()
{
  // defaults industryPrice at 0
  var industryPrice = 0;
  //gets the industryCalc
  var theForm = document.forms["industryCalc"];
  // gets the form element for the selected industry dropdown
  var selectedIndustry = theForm.elements["industry"];
  // the industryValue[selectedIndustry] is put into industryPrice
  industryPrice = industryValue[selectedIndustry.value];
  //finally we return industryPrice
  return industryPrice;
}

//gets the inputted value for annual wage/payroll size
function getWages() {
  /* finds out whether the browser uses textContent (Webkit, Opera, Mozilla...)
  or innerText (Microsoft) to set the text of an element/node */
  var wages = 0;
  var textType = Node.textContent ? 'textContent' : 'innerText';
  /* uses parseFloat to create numbers (where possible) from the entered value
  if parseFloat fails to find a number (it's empty or nonsensical)
  then a 0 is used instead (to prevent NaN being the output). */
  wages = parseFloat(document.getElementById('wages').value) || 0
  //returns wages so we can use the value with getWages()
  return wages;
}

// calculates the total result
function calculateTotal()
{
  // given estimator formula
  var industrySavings = [getWages() * getIndustryPrice()] * 0.13;
  //display the result in totalPrice
  var divobj= document.getElementById('totalPrice');
  divobj.innerHTML = industrySavings;
}
