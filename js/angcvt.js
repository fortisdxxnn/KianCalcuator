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

    //Conversions for the Degrees
    if(from=="DEG" && to=="DEG")
    {
        finalval=(intialval *1).toLocaleString(undefined,{maximumFractionDigits:2,maximumFractionDigits:2});
        $(".display2").val(finalval);
    }
    if(from=="DEG" && to=="RAD")
    {
        finalval=(intialval * ((3.14159)/180)).toLocaleString(undefined,{minimumFractionDisgits:2,minimumFractionDigits:2});
        $(".display2").val(finalval);
    }
    if(from=="DEG" && to=="GAD")
    {
        finalval=((intialval *(200/180))).toLocaleString(undefined,{maximumFractionDigits:2,minimumFractionDigits:2});
        $(".display2").val(finalval);
    }

    //Conversions for the Radians
    if(from=="RAD" && to=="DEG")
    {
        finalval=((intialval * (180/(3.14159)))).toLocaleString(undefined,{maximumFractionDigits:2,maximumFractionDigits:2});
        $(".display2").val(finalval);
    }
    if(from=="RAD" && to=="RAD")
    {
        finalval=(intialval * 1).toLocaleString(undefined,{minimumFractionDisgits:2,minimumFractionDigits:2});
        $(".display2").val(finalval);
    }
    if(from=="RAD" && to=="GAD")
    {
        finalval=((intialval *(200/(3.14159)))).toLocaleString(undefined,{maximumFractionDigits:2,minimumFractionDigits:2});
        $(".display2").val(finalval);
    }

    //Conversions for the Gradian
    if(from=="GAD" && to=="DEG")
    {
        finalval=((intialval * (180/(200)))).toLocaleString(undefined,{maximumFractionDigits:2,maximumFractionDigits:2});
        $(".display2").val(finalval);
    }
    if(from=="GAD" && to=="RAD")
    {
        finalval=((intialval * (3.14159/200))).toLocaleString(undefined,{minimumFractionDisgits:2,minimumFractionDigits:2});
        $(".display2").val(finalval);
    }
    if(from=="GAD" && to=="GAD")
    {
        finalval=(intialval).toLocaleString(undefined,{manimumFractionDigits:2,maximumFractionDigits:2});
        $(".display2").val(finalval);
    }
}