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

    //Conversions for the Seconds
    if(from=="SEC" && to=="SEC")
    {
        finalval=intialval * 1;
        $(".display2").val(finalval);
    }
    if(from=="SEC" && to=="MIN")
    {
        finalval=intialval * 0.0166667;
        $(".display2").val(finalval);
    }
    if(from=="SEC" && to=="HRS")
    {
        finalval=intialval * 0.000277778;
        $(".display2").val(finalval);
    }
    if(from=="SEC" && to=="DAY")
    {
        finalval=intialval * 0.000012;
        $(".display2").val(finalval);
    }
    if(from=="SEC" && to=="WEK")
    {
        finalval=intialval * 0.000002;
        $(".display2").val(finalval);
    }
    if(from=="SEC" && to=="YRS")
    {
        finalval=intialval * 0.000000031688088;
        $(".display2").val(finalval)
    }

     //Conversions for the Minutes
     if(from=="MIN" && to=="SEC")
     {
         finalval=intialval * 60;
         $(".display2").val(finalval);
     }
     if(from=="MIN" && to=="MIN")
     {
         finalval=intialval * 1;
         $(".display2").val(finalval);
     }
     if(from=="MIN" && to=="HRS")
     {
         finalval=intialval * 0.016667;
         $(".display2").val(finalval);
     }
     if(from=="MIN" && to=="DAY")
     {
         finalval=intialval * 0.000694;
         $(".display2").val(finalval);
     }
     if(from=="MIN" && to=="WEK")
     {
         finalval=intialval * 0.000099;
         $(".display2").val(finalval);
     }
     if(from=="MIN" && to=="YRS")
     {
         finalval=intialval * 0.000002;
         $(".display2").val(finalval)
     }

      //Conversions for the Hours
      if(from=="HRS" && to=="SEC")
      {
          finalval=intialval * 3600;
          $(".display2").val(finalval);
      }
      if(from=="HRS" && to=="MIN")
      {
          finalval=intialval * 60;
          $(".display2").val(finalval);
      }
      if(from=="HRS" && to=="HRS")
      {
          finalval=intialval * 1;
          $(".display2").val(finalval);
      }
      if(from=="HRS" && to=="DAY")
      {
          finalval=intialval * 0.041667;
          $(".display2").val(finalval);
      }
      if(from=="HRS" && to=="WEK")
      {
          finalval=intialval * 0.005952;
          $(".display2").val(finalval);
      }
      if(from=="HRS" && to=="YRS")
      {
          finalval=intialval * 0.000114;
          $(".display2").val(finalval)
      }

      //Conversions for the DAYS
      if(from=="DAY" && to=="SEC")
      {
          finalval=intialval * 86400;
          $(".display2").val(finalval);
      }
      if(from=="DAY" && to=="MIN")
      {
          finalval=intialval * 1440;
          $(".display2").val(finalval);
      }
      if(from=="DAY" && to=="HRS")
      {
          finalval=intialval * 24;
          $(".display2").val(finalval);
      }
      if(from=="DAY" && to=="DAY")
      {
          finalval=intialval * 1;
          $(".display2").val(finalval);
      }
      if(from=="DAY" && to=="WEK")
      {
          finalval=intialval * 0.142857;
          $(".display2").val(finalval);
      }
      if(from=="DAY" && to=="YRS")
      {
          finalval=intialval * 0.002738;
          $(".display2").val(finalval)
      }

      //Conversions for the DAYS
      if(from=="DAY" && to=="SEC")
      {
          finalval=intialval * 86400;
          $(".display2").val(finalval);
      }
      if(from=="DAY" && to=="MIN")
      {
          finalval=intialval * 1440;
          $(".display2").val(finalval);
      }
      if(from=="DAY" && to=="HRS")
      {
          finalval=intialval * 24;
          $(".display2").val(finalval);
      }
      if(from=="DAY" && to=="DAY")
      {
          finalval=intialval * 1;
          $(".display2").val(finalval);
      }
      if(from=="DAY" && to=="WEK")
      {
          finalval=intialval * 0.142857;
          $(".display2").val(finalval);
      }
      if(from=="DAY" && to=="YRS")
      {
          finalval=intialval * 0.002738;
          $(".display2").val(finalval)
      }

      //Conversions for the Weeks
      if(from=="WEK" && to=="SEC")
      {
          finalval=intialval * 86400;
          $(".display2").val(finalval);
      }
      if(from=="WEK" && to=="MIN")
      {
          finalval=intialval * 10080;
          $(".display2").val(finalval);
      }
      if(from=="WEK" && to=="HRS")
      {
          finalval=intialval * 168;
          $(".display2").val(finalval);
      }
      if(from=="WEK" && to=="DAY")
      {
          finalval=intialval * 7;
          $(".display2").val(finalval);
      }
      if(from=="WEK" && to=="WEK")
      {
          finalval=intialval * 1;
          $(".display2").val(finalval);
      }
      if(from=="WEK" && to=="YRS")
      {
          finalval=intialval * 0.019165;
          $(".display2").val(finalval)
      }

       //Conversions for the Years
       if(from=="YRS" && to=="SEC")
       {
           finalval=intialval * 31557600;
           $(".display2").val(finalval);
       }
       if(from=="YRS" && to=="MIN")
       {
           finalval=intialval * 525960;
           $(".display2").val(finalval);
       }
       if(from=="YRS" && to=="HRS")
       {
           finalval=intialval * 8766;
           $(".display2").val(finalval);
       }
       if(from=="YRS" && to=="DAY")
       {
           finalval=intialval * 365.25;
           $(".display2").val(finalval);
       }
       if(from=="YRS" && to=="WEK")
       {
           finalval=intialval * 52.17857;
           $(".display2").val(finalval);
       }
       if(from=="YRS" && to=="YRS")
       {
           finalval=intialval * 0.019165;
           $(".display2").val(finalval)
       }
}