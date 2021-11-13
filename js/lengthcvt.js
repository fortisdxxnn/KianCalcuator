function insrt(num){
    $(".display1").val($(".display1").val() + num);
}

function c() {
    $(".display1").val('');
    $(".display2").val('');
}

function del() {
    var value = $(".display1").val();
    $(".display1").val(value.substring(0, value.length - 1));
}

function conv(){
    var from=$(".from-curr").find(":selected").val();
    var to = $(".to-curr").find(":selected").val();
    var intialval=parseFloat($(".display1").val());

    //Conversions for the Meters
    if(from=="MET" && to=="MET")
    {
        finalval=(intialval *1) ;
        $(".display2").val(finalval);
    }
    if(from=="MET" && to=="MILI")
    {
        finalval=(intialval * 1000);
        $(".display2").val(finalval);
    }
    if(from=="MET" && to=="CEN")
    {
        finalval=(intialval *100);
        $(".display2").val(finalval);
    }
    if(from=="MET" && to=="INC")
    {
        finalval=(intialval *39.37008);
        $(".display2").val(finalval);
    }
    if(from=="MET" && to=="MILE")
    {
        finalval=(intialval *0.000621);
        $(".display2").val(finalval);
    }
    if(from=="MET" && to=="YAR")
    {
        finalval=(intialval *1.093613);
        $(".display2").val(finalval);
    }
    if(from=="MET" && to=="FEET")
    {
        finalval=(intialval *3.28084);
        $(".display2").val(finalval);
    }

    
    //Conversions for the Millimeters
    if(from=="MILI" && to=="MET")
    {
        finalval=(intialval *0.001);
        $(".display2").val(finalval);
    }
    if(from=="MILI" && to=="MILI")
    {
        finalval=(intialval * 1);
        $(".display2").val(finalval);
    }
    if(from=="MILI" && to=="CEN")
    {
        finalval=(intialval *0.1);
        $(".display2").val(finalval);
    }
    if(from=="MILI" && to=="INC")
    {
        finalval=(intialval *0.03937);
        $(".display2").val(finalval);
    }
    if(from=="MILI" && to=="MILE")
    {
        finalval=(intialval *0.000000621371192);
        $(".display2").val(finalval);
    }
    if(from=="MILI" && to=="YAR")
    {
        finalval=(intialval *0.001094) ;
        $(".display2").val(finalval);
    }
    if(from=="MILI" && to=="FEET")
    {
        finalval=(intialval *0.003281) ;
        $(".display2").val(finalval);
    }

    //Conversions for the Centimeters
    if(from=="CEN" && to=="MET")
    {
        finalval=(intialval *0.01);
        $(".display2").val(finalval);
    }
    if(from=="CEN" && to=="MILI")
    {
        finalval=(intialval * 10);
        $(".display2").val(finalval);
    }
    if(from=="CEN" && to=="CEN")
    {
        finalval=(intialval *1);
        $(".display2").val(finalval);
    }
    if(from=="CEN" && to=="INC")
    {
        finalval=(intialval *0.393701);
        $(".display2").val(finalval);
    }
    if(from=="CEN" && to=="MILE")
    {
        finalval=(intialval *0.000006);
        $(".display2").val(finalval);
    }
    if(from=="CEN" && to=="YAR")
    {
        finalval=(intialval *0.010936);
        $(".display2").val(finalval);
    }
    if(from=="CEN" && to=="FEET")
    {
        finalval=(intialval *0.032808);
        $(".display2").val(finalval);
    }

    //Conversions for the Inches
    if(from=="INC" && to=="MET")
    {
        finalval=(intialval * 0.0254);
        $(".display2").val(finalval);
    }
    if(from=="INC" && to=="MILI")
    {
        finalval=(intialval * 25.4);
        $(".display2").val(finalval);
    }
    if(from=="INC" && to=="CEN")
    {
        finalval=(intialval *2.54);
        $(".display2").val(finalval);
    }
    if(from=="INC" && to=="INC")
    {
        finalval=(intialval *1);
        $(".display2").val(finalval);
    }
    if(from=="INC" && to=="MILE")
    {
        finalval=(intialval *0.000016);
        $(".display2").val(finalval);
    }
    if(from=="INC" && to=="YAR")
    {
        finalval=(intialval *0.027778);
        $(".display2").val(finalval);
    }
    if(from=="INC" && to=="FEET")
    {
        finalval=(intialval *0.083333);
        $(".display2").val(finalval);
    }

    //Conversions for the Miles
    if(from=="MILE" && to=="MET")
    {
        finalval=(intialval * 1609.344);
        $(".display2").val(finalval);
    }
    if(from=="MILE" && to=="MILI")
    {
        finalval=(intialval * 1609344);
        $(".display2").val(finalval);
    }
    if(from=="MILE" && to=="CEN")
    {
        finalval=(intialval *160934.4);
        $(".display2").val(finalval);
    }
    if(from=="MILE" && to=="INC")
    {
        finalval=(intialval *63360);
        $(".display2").val(finalval);
    }
    if(from=="MILE" && to=="MILE")
    {
        finalval=(intialval *1);
        $(".display2").val(finalval);
    }
    if(from=="MILE" && to=="YAR")
    {
        finalval=(intialval *1760);
        $(".display2").val(finalval);
    }
    if(from=="MILE" && to=="FEET")
    {
        finalval=(intialval *5280);
        $(".display2").val(finalval);
    }

    //Conversions for the Yards
    if(from=="YAR" && to=="MET")
    {
        finalval=(intialval * 0.9144);
        $(".display2").val(finalval);
    }
    if(from=="YAR" && to=="MILI")
    {
        finalval=(intialval * 914.4);
        $(".display2").val(finalval);
    }
    if(from=="YAR" && to=="CEN")
    {
        finalval=(intialval *91.44);
        $(".display2").val(finalval);
    }
    if(from=="YAR" && to=="INC")
    {
        finalval=(intialval *36);
        $(".display2").val(finalval);
    }
    if(from=="YAR" && to=="MILE")
    {
        finalval=(intialval *0.000568);
        $(".display2").val(finalval);
    }
    if(from=="YAR" && to=="YAR")
    {
        finalval=(intialval *1);
        $(".display2").val(finalval);
    }
    if(from=="YAR" && to=="FEET")
    {
        finalval=(intialval *3);
        $(".display2").val(finalval);
    }

    //Conversions for the Feet
    if(from=="FEET" && to=="MET")
    {
        finalval=(intialval * 0.3048);
        $(".display2").val(finalval);
    }
    if(from=="FEET" && to=="MILI")
    {
        finalval=(intialval * 304.8);
        $(".display2").val(finalval);
    }
    if(from=="FEET" && to=="CEN")
    {
        finalval=(intialval *30.48);
        $(".display2").val(finalval);
    }
    if(from=="FEET" && to=="INC")
    {
        finalval=(intialval *12);
        $(".display2").val(finalval);
    }
    if(from=="FEET" && to=="MILE")
    {
        finalval=(intialval *0.000189);
        $(".display2").val(finalval);
    }
    if(from=="FEET" && to=="YAR")
    {
        finalval=(intialval *0.333333);
        $(".display2").val(finalval);
    }
    if(from=="FEET" && to=="FEET")
    {
        finalval=(intialval *1);
        $(".display2").val(finalval);
    }
}