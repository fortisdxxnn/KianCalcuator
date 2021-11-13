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

    //Conversions for the Pounds
    if(from=="PON" && to=="PON")
    {
        finalval=(intialval *1) ;
        $(".display2").val(finalval);
    }
    if(from=="PON" && to=="MILIG")
    {
        finalval=(intialval * 453592.4);
        $(".display2").val(finalval);
    }
    if(from=="PON" && to=="OUN")
    {
        finalval=(intialval * 16);
        $(".display2").val(finalval);
    }
    if(from=="PON" && to=="GRM")
    {
        finalval=(intialval * 453.5924);
        $(".display2").val(finalval);
    }
    if(from=="PON" && to=="KILO")
    {
        finalval=(intialval * 0.453592);
        $(".display2").val(finalval);
    }

    //Conversions for the Milligrams
    if(from=="MILIG" && to=="PON")
    {
        finalval=(intialval *0.000002);
        $(".display2").val(finalval);
    }
    if(from=="MILIG" && to=="MILIG")
    {
        finalval=(intialval * 453592.4);
        $(".display2").val(finalval);
    }
    if(from=="MILIG" && to=="OUN")
    {
        finalval=(intialval * 0.000035);
        $(".display2").val(finalval);
    }
    if(from=="MILIG" && to=="GRM")
    {
        finalval=(intialval * 0.001);
        $(".display2").val(finalval);
    }
    if(from=="MILIG" && to=="KILO")
    {
        finalval=(intialval * 0.000001);
        $(".display2").val(finalval);
    }

    //Conversions for the Ounces
    if(from=="OUN" && to=="PON")
    {
        finalval=(intialval * 0.0625);
        $(".display2").val(finalval);
    }
    if(from=="OUN" && to=="MILIG")
    {
        finalval=(intialval * 28349.52);
        $(".display2").val(finalval);
    }
    if(from=="OUN" && to=="OUN")
    {
        finalval=(intialval * 1);
        $(".display2").val(finalval);
    }
    if(from=="OUN" && to=="GRM")
    {
        finalval=(intialval * 28.34952);
        $(".display2").val(finalval);
    }
    if(from=="OUN" && to=="KILO")
    {
        finalval=(intialval * 0.02835);
        $(".display2").val(finalval);
    }

    //Conversions for the Grams
    if(from=="GRM" && to=="PON")
    {
        finalval=(intialval * 0.002205);
        $(".display2").val(finalval);
    }
    if(from=="GRM" && to=="MILIG")
    {
        finalval=(intialval * 1000);
        $(".display2").val(finalval);
    }
    if(from=="GRM" && to=="OUN")
    {
        finalval=(intialval * 0.035274);
        $(".display2").val(finalval);
    }
    if(from=="GRM" && to=="GRM")
    {
        finalval=(intialval * 1);
        $(".display2").val(finalval);
    }
    if(from=="GRM" && to=="KILO")
    {
        finalval=(intialval * 0.001);
        $(".display2").val(finalval);
    }
}