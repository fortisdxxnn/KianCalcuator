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

    //Conversions for the Celsius
    if(from=="CEL" && to=="CEL")
    {
        finalval=intialval * 1;
        $(".display2").val(finalval);
    }
    if(from=="CEL" && to=="FAR")
    {
        finalval=((intialval/(5/9))+32).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        $(".display2").val(finalval);
    }
    if(from=="CEL" && to=="KEL")
    {
        finalval=(intialval +  273.15).toLocaleString(undefined,{maximumFractionDigits:2,minimumFractionDigits:2});
        $(".display2").val(finalval);
    }

    //Conversions for the Fahrenheit
    if(from=="FAR" && to=="CEL")
    {
        finalval=((intialval -32) * (5/9)).toLocaleString(undefined,{maximumFractionDigits:2,minimumFractionDigits:2});
        $(".display2").val(finalval);
    }
    if(from=="FAR" && to=="FAR")
    {
        finalval=(intialval *1).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        $(".display2").val(finalval);
    }
    if(from=="FAR" && to=="KEL")
    {
        finalval=(((intialval -32) * (5/9)) +  273.15).toLocaleString(undefined,{maximumFractionDigits:2,minimumFractionDigits:2});
        $(".display2").val(finalval);
    }

    //Conversions for the Kelvin
    if(from=="KEL" && to=="CEL")
    {
        finalval=(intialval - 273.15).toLocaleString(undefined,{maximumFractionDigits:2,minimumFractionDigits:2});
        $(".display2").val(finalval);
    }
    if(from=="KEL" && to=="FAR")
    {
        finalval=(((intialval - 273.15)/(5/9))+32).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        $(".display2").val(finalval);
    }
    if(from=="KEL" && to=="KEL")
    {
        finalval=(intialval * 1).toLocaleString(undefined,{maximumFractionDigits:2,minimumFractionDigits:2});
        $(".display2").val(finalval);
    }
}