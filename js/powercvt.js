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

    //Conversions for the Watts
    if(from=="WAT" && to=="WAT")
    {
        finalval=(intialval *1) ;
        $(".display2").val(finalval);
    }
    if(from=="WAT" && to=="KWAT")
    {
        finalval=(intialval * 0.001);
        $(".display2").val(finalval);
    }
    if(from=="WAT" && to=="HOR")
    {
        finalval=(intialval *0.00134102);
        $(".display2").val(finalval);
    }
    if(from=="WAT" && to=="FPM")
    {
        finalval=(intialval *44.25373);
        $(".display2").val(finalval);
    }
    if(from=="WAT" && to=="BTU")
    {
        finalval=(intialval *0.056869);
        $(".display2").val(finalval);
    }

    //Conversions for the Kilowatts
    if(from=="KWAT" && to=="WAT")
    {
        finalval=(intialval *1000) ;
        $(".display2").val(finalval);
    }
    if(from=="KWAT" && to=="KWAT")
    {
        finalval=(intialval * 1);
        $(".display2").val(finalval);
    }
    if(from=="KWAT" && to=="HOR")
    {
        finalval=(intialval *1.341022);
        $(".display2").val(finalval);
    }
    if(from=="KWAT" && to=="FPM")
    {
        finalval=(intialval *44253.73);
        $(".display2").val(finalval);
    }
    if(from=="KWAT" && to=="BTU")
    {
        finalval=(intialval *56.86902);
        $(".display2").val(finalval);
    }

     //Conversions for the HorsePower
     if(from=="HOR" && to=="WAT")
     {
         finalval=(intialval *745.6999);
         $(".display2").val(finalval);
     }
     if(from=="HOR" && to=="KWAT")
     {
         finalval=(intialval * 0.7457);
         $(".display2").val(finalval);
     }
     if(from=="HOR" && to=="HOR")
     {
         finalval=(intialval *1);
         $(".display2").val(finalval);
     }
     if(from=="HOR" && to=="FPM")
     {
         finalval=(intialval *33000);
         $(".display2").val(finalval);
     }
     if(from=="HOR" && to=="BTU")
     {
         finalval=(intialval *42.40722);
         $(".display2").val(finalval);
     }

     //Conversions for the Foot lb/Minute
     if(from=="FPM" && to=="WAT")
     {
         finalval=(intialval *0.022597);
         $(".display2").val(finalval);
     }
     if(from=="FPM" && to=="KWAT")
     {
         finalval=(intialval * 0.000023);
         $(".display2").val(finalval);
     }
     if(from=="FPM" && to=="HOR")
     {
         finalval=(intialval *0.00003);
         $(".display2").val(finalval);
     }
     if(from=="FPM" && to=="FPM")
     {
         finalval=(intialval *1);
         $(".display2").val(finalval);
     }
     if(from=="FPM" && to=="BTU")
     {
         finalval=(intialval *0.001285);
         $(".display2").val(finalval);
     }

      //Conversions for the BTU
      if(from=="BTU" && to=="WAT")
      {
          finalval=(intialval *17.58427);
          $(".display2").val(finalval);
      }
      if(from=="BTU" && to=="KWAT")
      {
          finalval=(intialval * 0.017584);
          $(".display2").val(finalval);
      }
      if(from=="BTU" && to=="HOR")
      {
          finalval=(intialval *0.023581);
          $(".display2").val(finalval);
      }
      if(from=="BTU" && to=="FPM")
      {
          finalval=(intialval *778.1694);
          $(".display2").val(finalval);
      }
      if(from=="BTU" && to=="BTU")
      {
          finalval=(intialval *1);
          $(".display2").val(finalval);
      }
}