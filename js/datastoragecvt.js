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

    //Conversions for the Bits
    if(from=="BIT" && to=="BIT")
    {
        finalval=(intialval *1) ;
        $(".display2").val(finalval);
    }
    if(from=="BIT" && to=="BYTE")
    {
        finalval=(intialval * 0.125);
        $(".display2").val(finalval);
    }
    if(from=="BIT" && to=="MEGA")
    {
        finalval=(intialval * 0.000000125);
        $(".display2").val(finalval);
    }
    if(from=="BIT" && to=="GIGA")
    {
        finalval=(intialval * 0.000000000125);
        $(".display2").val(finalval);
    }
    if(from=="BIT" && to=="TERA")
    {
        finalval=(intialval * 0.000000000000125);
        $(".display2").val(finalval);
    }

    //Conversions for the Bytes
    if(from=="BYTE" && to=="BIT")
    {
        finalval=(intialval *8) ;
        $(".display2").val(finalval);
    }
    if(from=="BYTE" && to=="BYTE")
    {
        finalval=(intialval * 1);
        $(".display2").val(finalval);
    }
    if(from=="BYTE" && to=="MEGA")
    {
        finalval=(intialval * 0.000001);
        $(".display2").val(finalval);
    }
    if(from=="BYTE" && to=="GIGA")
    {
        finalval=(intialval * 0.000000001);
        $(".display2").val(finalval);
    }
    if(from=="BYTE" && to=="TERA")
    {
        finalval=(intialval * 0.000000000001);
        $(".display2").val(finalval);
    }

    //Conversions for the Megabytes
    if(from=="MEGA" && to=="BIT")
    {
        finalval=(intialval * 8000000) ;
        $(".display2").val(finalval);
    }
    if(from=="MEGA" && to=="BYTE")
    {
        finalval=(intialval * 1000000);
        $(".display2").val(finalval);
    }
    if(from=="MEGA" && to=="MEGA")
    {
        finalval=(intialval * 1);
        $(".display2").val(finalval);
    }
    if(from=="MEGA" && to=="GIGA")
    {
        finalval=(intialval * 0.001);
        $(".display2").val(finalval);
    }
    if(from=="MEGA" && to=="TERA")
    {
        finalval=(intialval * 0.000001);
        $(".display2").val(finalval);
    }

    //Conversions for the Gigabytes
    if(from=="GIGA" && to=="BIT")
    {
        finalval=(intialval * 8000000000) ;
        $(".display2").val(finalval);
    }
    if(from=="GIGA" && to=="BYTE")
    {
        finalval=(intialval * 1000000000);
        $(".display2").val(finalval);
    }
    if(from=="GIGA" && to=="MEGA")
    {
        finalval=(intialval * 1000);
        $(".display2").val(finalval);
    }
    if(from=="GIGA" && to=="GIGA")
    {
        finalval=(intialval * 1);
        $(".display2").val(finalval);
    }
    if(from=="GIGA" && to=="TERA")
    {
        finalval=(intialval * 0.001);
        $(".display2").val(finalval);
    }

    //Conversions for the Terabytes
    if(from=="TERA" && to=="BIT")
    {
        finalval=(intialval * 8000000000000) ;
        $(".display2").val(finalval);
    }
    if(from=="TERA" && to=="BYTE")
    {
        finalval=(intialval * 1000000000000);
        $(".display2").val(finalval);
    }
    if(from=="TERA" && to=="MEGA")
    {
        finalval=(intialval * 1000000);
        $(".display2").val(finalval);
    }
    if(from=="TERA" && to=="GIGA")
    {
        finalval=(intialval * 1000);
        $(".display2").val(finalval);
    }
    if(from=="TERA" && to=="TERA")
    {
        finalval=(intialval * 1);
        $(".display2").val(finalval);
    }
}