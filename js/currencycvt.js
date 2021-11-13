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

    if(intialval=="")
    {
        $(".display2").val("Enter Amount");
    }

    //Conversions for the U.S Dollar
    if(from=="USD" && to=="USD")
    {
        finalval=intialval * 1;
        $(".display2").val(finalval);
    }
    if(from=="USD" && to=="JMD")
    {
        finalval=intialval * 155.49;
        $(".display2").val(finalval);
    }
    if(from=="USD" && to=="EUR")
    {
        finalval=intialval * 0.87;
        $(".display2").val(finalval);
    }
    if(from=="USD" && to=="JPY")
    {
        finalval=intialval * 113.97;
        $(".display2").val(finalval);
    }
    if(from=="USD" && to=="GBP")
    {
        finalval=intialval * 0.75;
        $(".display2").val(finalval);
    }
    if(from=="USD" && to=="CHF")
    {
        finalval=intialval * 0.92;
        $(".display2").val(finalval);
    }
    if(from=="USD" && to=="CAD")
    {
        finalval=intialval * 1.25;
        $(".display2").val(finalval);
    }
    if(from=="USD" && to=="AUD")
    {
        finalval=intialval * 1.37;
        $(".display2").val(finalval);
    }
    if(from=="USD" && to=="ZAR")
    {
        finalval=intialval * 15.47;
        $(".display2").val(finalval);
    }
    if(from=="USD" && to=="CNY")
    {
        finalval=intialval * 6.41;
        $(".display2").val(finalval);
    }

    //Conversions for the U.S Dollar
    if(from=="JMD" && to=="USD")
    {
        finalval=intialval * 0.0064;
        $(".display2").val(finalval);
    }
    if(from=="JMD" && to=="JMD")
    {
        finalval=intialval * 1;
        $(".display2").val(finalval);
    }
    if(from=="JMD" && to=="EUR")
    {
        finalval=intialval * 0.0056;
        $(".display2").val(finalval);
    }
    if(from=="JMD" && to=="JPY")
    {
        finalval=intialval * 0.73;
        $(".display2").val(finalval);
    }
    if(from=="JMD" && to=="GBP")
    {
        finalval=intialval * 0.0048;
        $(".display2").val(finalval);
    }
    if(from=="JMD" && to=="CHF")
    {
        finalval=intialval * 0.0059;
        $(".display2").val(finalval);
    }
    if(from=="JMD" && to=="CAD")
    {
        finalval=intialval * 0.008;
        $(".display2").val(finalval);
    }
    if(from=="JMD" && to=="AUD")
    {
        finalval=intialval * 0.0088;
        $(".display2").val(finalval);
    }
    if(from=="JMD" && to=="ZAR")
    {
        finalval=intialval * 0.099;
        $(".display2").val(finalval);
    }
    if(from=="JMD" && to=="CNY")
    {
        finalval=intialval * 0.041;
        $(".display2").val(finalval);
    }

    //Conversions for the Euro
    if(from=="EUR" && to=="USD")
    {
        finalval=intialval * 1.15;
        $(".display2").val(finalval);
    }
    if(from=="EUR" && to=="JMD")
    {
        finalval=intialval * 179.59;
        $(".display2").val(finalval);
    }
    if(from=="EUR" && to=="EUR")
    {
        finalval=intialval * 1;
        $(".display2").val(finalval);
    }
    if(from=="EUR" && to=="JPY")
    {
        finalval=intialval * 130.82;
        $(".display2").val(finalval);
    }
    if(from=="EUR" && to=="GBP")
    {
        finalval=intialval * 0.86;
        $(".display2").val(finalval);
    }
    if(from=="EUR" && to=="CHF")
    {
        finalval=intialval * 1.05;
        $(".display2").val(finalval);
    }
    if(from=="EUR" && to=="CAD")
    {
        finalval=intialval * 1.44;
        $(".display2").val(finalval);
    }
    if(from=="EUR" && to=="AUD")
    {
        finalval=intialval * 1.57;
        $(".display2").val(finalval);
    }
    if(from=="EUR" && to=="ZAR")
    {
        finalval=intialval * 17.69;
        $(".display2").val(finalval);
    }
    if(from=="EUR" && to=="CNY")
    {
        finalval=intialval * 7.35;
        $(".display2").val(finalval);
    }

    //Conversions for the Japaneese Yeun
    if(from=="JPY" && to=="USD")
    {
        finalval=intialval * 0.0088;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="JMD")
    {
        finalval=intialval * 1.37;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="EUR")
    {
        finalval=intialval * 0.0076;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="JPY")
    {
        finalval=intialval * 1;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="GBP")
    {
        finalval=intialval * 0.0065;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="CHF")
    {
        finalval=intialval * 0.0081;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="CAD")
    {
        finalval=intialval * 0.011;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="AUD")
    {
        finalval=intialval * 0.012;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="ZAR")
    {
        finalval=intialval * 0.14;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="CNY")
    {
        finalval=intialval * 0.056;
        $(".display2").val(finalval);
    }

    //Conversions for the Japaneese Yeun
    if(from=="JPY" && to=="USD")
    {
        finalval=intialval * 0.0088;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="JMD")
    {
        finalval=intialval * 1.37;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="EUR")
    {
        finalval=intialval * 0.0076;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="JPY")
    {
        finalval=intialval * 1;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="GBP")
    {
        finalval=intialval * 0.0065;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="CHF")
    {
        finalval=intialval * 0.0081;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="CAD")
    {
        finalval=intialval * 0.011;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="AUD")
    {
        finalval=intialval * 0.012;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="ZAR")
    {
        finalval=intialval * 0.14;
        $(".display2").val(finalval);
    }
    if(from=="JPY" && to=="CNY")
    {
        finalval=intialval * 0.056;
        $(".display2").val(finalval);
    }

     //Conversions for the British Pound
     if(from=="GBP" && to=="USD")
     {
         finalval=intialval * 1.34;
         $(".display2").val(finalval);
     }
     if(from=="GBP" && to=="JMD")
     {
         finalval=intialval * 209.82;
         $(".display2").val(finalval);
     }
     if(from=="GBP" && to=="EUR")
     {
         finalval=intialval * 1.17;
         $(".display2").val(finalval);
     }
     if(from=="GBP" && to=="JPY")
     {
         finalval=intialval * 152.92;
         $(".display2").val(finalval);
     }
     if(from=="GBP" && to=="GBP")
     {
         finalval=intialval * 1;
         $(".display2").val(finalval);
     }
     if(from=="GBP" && to=="CHF")
     {
         finalval=intialval * 1.23;
         $(".display2").val(finalval);
     }
     if(from=="GBP" && to=="CAD")
     {
         finalval=intialval * 1.68;
         $(".display2").val(finalval);
     }
     if(from=="GBP" && to=="AUD")
     {
         finalval=intialval * 1.84;
         $(".display2").val(finalval);
     }
     if(from=="GBP" && to=="ZAR")
     {
         finalval=intialval * 20.67;
         $(".display2").val(finalval);
     }
     if(from=="GBP" && to=="CNY")
     {
         finalval=intialval * 8.59;
         $(".display2").val(finalval);
     }

      //Conversions for the Swiss Franc
      if(from=="CHF" && to=="USD")
      {
          finalval=intialval * 1.09;
          $(".display2").val(finalval);
      }
      if(from=="CHF" && to=="JMD")
      {
          finalval=intialval * 170.30;
          $(".display2").val(finalval);
      }
      if(from=="CHF" && to=="EUR")
      {
          finalval=intialval * 0.95;
          $(".display2").val(finalval);
      }
      if(from=="CHF" && to=="JPY")
      {
          finalval=intialval * 124.05;
          $(".display2").val(finalval);
      }
      if(from=="CHF" && to=="GBP")
      {
          finalval=intialval * 0.81;
          $(".display2").val(finalval);
      }
      if(from=="CHF" && to=="CHF")
      {
          finalval=intialval * 1;
          $(".display2").val(finalval);
      }
      if(from=="CHF" && to=="CAD")
      {
          finalval=intialval * 1.36;
          $(".display2").val(finalval);
      }
      if(from=="CHF" && to=="AUD")
      {
          finalval=intialval * 1.49;
          $(".display2").val(finalval);
      }
      if(from=="CHF" && to=="ZAR")
      {
          finalval=intialval * 16.78;
          $(".display2").val(finalval);
      }
      if(from=="CHF" && to=="CNY")
      {
          finalval=intialval * 6.97;
          $(".display2").val(finalval);
      }

      //Conversions for the Canadian Dollar
      if(from=="CAD" && to=="USD")
      {
          finalval=intialval * 0.80;
          $(".display2").val(finalval);
      }
      if(from=="CAD" && to=="JMD")
      {
          finalval=intialval * 125.11;
          $(".display2").val(finalval);
      }
      if(from=="CAN" && to=="EUR")
      {
          finalval=intialval * 0.70;
          $(".display2").val(finalval);
      }
      if(from=="CAD" && to=="JPY")
      {
          finalval=intialval * 91.13;
          $(".display2").val(finalval);
      }
      if(from=="CAD" && to=="GBP")
      {
          finalval=intialval * 0.60;
          $(".display2").val(finalval);
      }
      if(from=="CAD" && to=="CHF")
      {
          finalval=intialval * 0.73;
          $(".display2").val(finalval);
      }
      if(from=="CAD" && to=="CAD")
      {
          finalval=intialval * 1;
          $(".display2").val(finalval);
      }
      if(from=="CAD" && to=="AUD")
      {
          finalval=intialval * 1.09;
          $(".display2").val(finalval);
      }
      if(from=="CAD" && to=="ZAR")
      {
          finalval=intialval * 12.33;
          $(".display2").val(finalval);
      }
      if(from=="CAD" && to=="CNY")
      {
          finalval=intialval * 5.12;
          $(".display2").val(finalval);
      }

      //Conversions for the Austrailian Dollar
      if(from=="AUD" && to=="USD")
      {
          finalval=intialval * 0.73;
          $(".display2").val(finalval);
      }
      if(from=="AUD" && to=="JMD")
      {
          finalval=intialval * 114.44;
          $(".display2").val(finalval);
      }
      if(from=="AUD" && to=="EUR")
      {
          finalval=intialval * 0.64;
          $(".display2").val(finalval);
      }
      if(from=="AUD" && to=="JPY")
      {
          finalval=intialval * 83.35;
          $(".display2").val(finalval);
      }
      if(from=="AUD" && to=="GBP")
      {
          finalval=intialval * 0.54;
          $(".display2").val(finalval);
      }
      if(from=="AUD" && to=="CHF")
      {
          finalval=intialval * 0.67;
          $(".display2").val(finalval);
      }
      if(from=="AUD" && to=="CAD")
      {
          finalval=intialval * 0.91;
          $(".display2").val(finalval);
      }
      if(from=="AUD" && to=="AUD")
      {
          finalval=intialval * 1;
          $(".display2").val(finalval);
      }
      if(from=="AUD" && to=="ZAR")
      {
          finalval=intialval * 11.28;
          $(".display2").val(finalval);
      }
      if(from=="AUD" && to=="CNY")
      {
          finalval=intialval * 4.68;
          $(".display2").val(finalval);
      }

      //Conversions for the South American Dollar
      if(from=="ZAR" && to=="USD")
      {
          finalval=intialval * 0.065;
          $(".display2").val(finalval);
      }
      if(from=="ZAR" && to=="JMD")
      {
          finalval=intialval * 10.14;
          $(".display2").val(finalval);
      }
      if(from=="ZAR" && to=="EUR")
      {
          finalval=intialval * 0.056;
          $(".display2").val(finalval);
      }
      if(from=="ZAR" && to=="JPY")
      {
          finalval=intialval * 7.40;
          $(".display2").val(finalval);
      }
      if(from=="ZAR" && to=="GBP")
      {
          finalval=intialval * 0.048;
          $(".display2").val(finalval);
      }
      if(from=="ZAR" && to=="CHF")
      {
          finalval=intialval * 0.060;
          $(".display2").val(finalval);
      }
      if(from=="ZAR" && to=="CAD")
      {
          finalval=intialval * 0.081;
          $(".display2").val(finalval);
      }
      if(from=="ZAR" && to=="AUD")
      {
          finalval=intialval * 0.089;
          $(".display2").val(finalval);
      }
      if(from=="ZAR" && to=="ZAR")
      {
          finalval=intialval * 1;
          $(".display2").val(finalval);
      }
      if(from=="ZAR" && to=="CNY")
      {
          finalval=intialval * 0.42;
          $(".display2").val(finalval);
      }

      //Conversions for the Chineese Yeng
      if(from=="CNY" && to=="USD")
      {
          finalval=intialval * 0.16;
          $(".display2").val(finalval);
      }
      if(from=="CNY" && to=="JMD")
      {
          finalval=intialval * 24.43;
          $(".display2").val(finalval);
      }
      if(from=="CNY" && to=="EUR")
      {
          finalval=intialval * 0.14;
          $(".display2").val(finalval);
      }
      if(from=="CNY" && to=="JPY")
      {
          finalval=intialval * 17.79;
          $(".display2").val(finalval);
      }
      if(from=="CNY" && to=="GBP")
      {
          finalval=intialval * 0.12;
          $(".display2").val(finalval);
      }
      if(from=="CNY" && to=="CHF")
      {
          finalval=intialval * 0.14;
          $(".display2").val(finalval);
      }
      if(from=="CNY" && to=="CAD")
      {
          finalval=intialval * 0.20;
          $(".display2").val(finalval);
      }
      if(from=="CNY" && to=="AUD")
      {
          finalval=intialval * 0.21;
          $(".display2").val(finalval);
      }
      if(from=="CNY" && to=="ZAR")
      {
          finalval=intialval * 2.40;
          $(".display2").val(finalval);
      }
      if(from=="ZAR" && to=="CNY")
      {
          finalval=intialval * 1;
          $(".display2").val(finalval);
      }
}