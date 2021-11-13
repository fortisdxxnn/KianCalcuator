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

    //Conversions for the Teaspoons
    if(from=="TSP" && to=="TSP")
    {
        finalval=(intialval *1) ;
        $(".display2").val(finalval);
    }
    if(from=="TSP" && to=="OUN")
    {
        finalval=(intialval * 0.166667);
        $(".display2").val(finalval);
    }
    if(from=="TSP" && to=="CUP")
    {
        finalval=(intialval * 0.020833);
        $(".display2").val(finalval);
    }
    if(from=="TSP" && to=="MILI")
    {
        finalval=(intialval * 4.928922);
        $(".display2").val(finalval);
    }
    if(from=="TSP" && to=="LIT")
    {
        finalval=(intialval * 0.004929);
        $(".display2").val(finalval);
    }

     //Conversions for the Ounces
     if(from=="OUN" && to=="TSP")
     {
         finalval=(intialval * 6) ;
         $(".display2").val(finalval);
     }
     if(from=="OUN" && to=="OUN")
     {
         finalval=(intialval * 1);
         $(".display2").val(finalval);
     }
     if(from=="OUN" && to=="CUP")
     {
         finalval=(intialval * 0.125);
         $(".display2").val(finalval);
     }
     if(from=="OUN" && to=="MILI")
     {
         finalval=(intialval * 29.57353);
         $(".display2").val(finalval);
     }
     if(from=="OUN" && to=="LIT")
     {
         finalval=(intialval * 0.029574);
         $(".display2").val(finalval);
     }

      //Conversions for the CUPS
      if(from=="CUP" && to=="TSP")
      {
          finalval=(intialval * 48) ;
          $(".display2").val(finalval);
      }
      if(from=="CUP" && to=="OUN")
      {
          finalval=(intialval * 48);
          $(".display2").val(finalval);
      }
      if(from=="CUP" && to=="CUP")
      {
          finalval=(intialval * 1);
          $(".display2").val(finalval);
      }
      if(from=="CUP" && to=="MILI")
      {
          finalval=(intialval * 236.5882);
          $(".display2").val(finalval);
      }
      if(from=="CUP" && to=="LIT")
      {
          finalval=(intialval * 0.236588);
          $(".display2").val(finalval);
      }

      //Conversions for the Mililiters
      if(from=="MILI" && to=="TSP")
      {
          finalval=(intialval * 0.202884) ;
          $(".display2").val(finalval);
      }
      if(from=="MILI" && to=="OUN")
      {
          finalval=(intialval * 0.033814);
          $(".display2").val(finalval);
      }
      if(from=="MILI" && to=="CUP")
      {
          finalval=(intialval * 0.004227);
          $(".display2").val(finalval);
      }
      if(from=="MILI" && to=="MILI")
      {
          finalval=(intialval * 1);
          $(".display2").val(finalval);
      }
      if(from=="MILI" && to=="LIT")
      {
          finalval=(intialval * 0.001);
          $(".display2").val(finalval);
      }

      //Conversions for the Liters
      if(from=="LIT" && to=="TSP")
      {
          finalval=(intialval * 202.8841) ;
          $(".display2").val(finalval);
      }
      if(from=="LIT" && to=="OUN")
      {
          finalval=(intialval * 33.81402);
          $(".display2").val(finalval);
      }
      if(from=="LIT" && to=="CUP")
      {
          finalval=(intialval * 4.226753);
          $(".display2").val(finalval);
      }
      if(from=="LIT" && to=="MILI")
      {
          finalval=(intialval * 1000);
          $(".display2").val(finalval);
      }
      if(from=="LIT" && to=="LIT")
      {
          finalval=(intialval * 1);
          $(".display2").val(finalval);
      }
}