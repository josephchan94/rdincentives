(function() {
  /*
     Calculator written by Joseph Chan December 2015
   */

  // gives industries values for the selector
  var industryValue = {
    "Aerospace":	0.1865,
    "Agricultural":	0.0813,
    "Apparel":	0.1025,
    "Architecture":	0.1526,
    "ArmsandDefense":	0.1905,
    "Automotive":	0.2175,
    "BiotechnologyLifeScience":	0.4279,
    "Brewing":	0.1347,
    "Chemicals":	0.2025,
    "Construction":	0.1263,
    "ConsumerProducts":	0.1550,
    "ContractManufacturer":	0.1512,
    "Cosmetics":	0.1487,
    "Electronics":	0.2325,
    "Engineering":	0.1825,
    "Food":	0.0784,
    "Foundries":	0.1756,
    "GamingTechnology":	0.2412,
    "ITServices":	0.1237,
    "MedicalDevices ":	0.2206,
    "Mining":	0.0930,
    "OilGas":	0.1751,
    "OtherManufacturing ":	0.1537,
    "Pharmaceuticals":	0.3750,
    "PlasticInjectionMolding":	0.1575,
    "Robotics":	0.2875,
    "SemiConductor":	0.2230,
    "SoftwareDeveloper":	0.3703,
    "StructuralEngineering":	0.1800,
    "Telecommunications":	0.1646,
    "Utilities":	0.1350,
    "WasteManagement":	0.0725,
    "Winemaking":	0.1224,
  };

  $('form[name=calc] input').on('keypress', function(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if (theEvent.keyCode != 8){
      if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
      }
    }
  });

  // calculates the total result
  $('#industryCalc').submit(function(event) {
    event.preventDefault();

    // gets the price of the industry selected from the dropdown
    var industryPrice = industryValue[$('#industry').val()];
    // gets the inputted value for annual wage/payroll size as a number
    var wages = parseFloat($('#wages').val());
    // given estimator formula
    var industrySavings = wages * industryPrice * 0.13;

    // returns the number, rounded to 2 decimal places, with commas a dollar sign
    function formatPrice(x) {
      x = x.toFixed(2);
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return '$' + parts.join(".");
    }

    //display the result in totalPrice
    $('#totalPrice').text(formatPrice(industrySavings));
    $('#estimated-credits').toggleClass('hidden');
  });

  // Show/hide form items
  $('#calc-eng-radio input').click(function() {
    if ($('input[name=calc-eng]:checked').val() == 'yes') {
      $('#calc-eng').removeClass('hidden');
      $('input[name=calc-eng-2').prop('required', true);
    } else {
      $('#calc-eng').addClass('hidden');
      $('input[name=calc-eng-2').prop('required', false);
    }
  });
  $('#calc-credit-radio input').click(function() {
    if ($('input[name=calc-credit]:checked').val() == 'yes')
      $('#calc-credit-2').removeClass('hidden');
    else
      $('#calc-credit-2').addClass('hidden');
  });
})();
