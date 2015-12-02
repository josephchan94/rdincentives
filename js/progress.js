$(function() {
    $( "#progressbar" ).progressbar({
      value: 50
    })
    .data("value","50");

    $("#plus").click(function() {
        var currValue = $( "#progressbar" ).data("value");
        currValue = parseInt(currValue) ? parseInt(currValue) : 0;
        if(currValue <= 100) {
            $( "#progressbar" ).progressbar({
              value: currValue+1
            }).data("value",currValue+1);
            $("#progressLabel").html((currValue+1)+"%");
        }
    });

    $("#minus").click(function() {
        var currValue = $( "#progressbar" ).data("value");
        currValue = parseInt(currValue) ? parseInt(currValue) : 0;
        if(currValue > 0) {
            $( "#progressbar" ).progressbar({
              value: currValue-1
            }).data("value",currValue-1);
            $("#progressLabel").html((currValue-1)+"%");
        }
    });

  });
