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

    //Conversions for the Meters per second
    if(from=="METS" && to=="METS")
    {
        finalval=(intialval *1) ;
        $(".display2").val(finalval);
    }
    if(from=="METS" && to=="KILOH")
    {
        finalval=(intialval * 3.6);
        $(".display2").val(finalval);
    }
    if(from=="METS" && to=="MILES")
    {
        finalval=(intialval * 2.237136);
        $(".display2").val(finalval);
    }

    //Conversions for the Kilometers per hour
    if(from=="KILOH" && to=="METS")
    {
        finalval=(intialval * 0.277778) ;
        $(".display2").val(finalval);
    }
    if(from=="KILOH" && to=="KILOH")
    {
        finalval=(intialval * 1);
        $(".display2").val(finalval);
    }
    if(from=="KILOH" && to=="MILES")
    {
        finalval=(intialval * 0.621427);
        $(".display2").val(finalval);
    }

    //Conversions for the Miles per Second
    if(from=="MILES" && to=="METS")
    {
        finalval=(intialval * 0.447) ;
        $(".display2").val(finalval);
    }
    if(from=="MILES" && to=="KILOH")
    {
        finalval=(intialval * 1.6092);
        $(".display2").val(finalval);
    }
    if(from=="MILES" && to=="MILES")
    {
        finalval=(intialval * 1);
        $(".display2").val(finalval);
    }
}