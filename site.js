function kart_sorgulama() {
    var kartno=document.getElementById("kartNo").value;
    
      if (/[^0-9-\s]+/.test(kartno)) 
      {
         alert("Kart numaranız sadece rakamlardan oluşmalı.");
         return false;
      } 
      if(kartno.substring(0,1)==0){
        alert("Kart numaranız 0 ile başlayamaz.");
        return false;
      }
       
      var toplam = 0, intRakam = 0, ciftMi = false;
      kartno = kartno.replace(/\D/g, "");//boşlukları sil
  
      for (var i = kartno.length - 1; i >= 0; i--) {
          var charNumber = kartno.charAt(i);
          intRakam = parseInt(charNumber);
   
          if (ciftMi) {
              if ((intRakam *= 2) > 9) intRakam -= 9;
          }
  
          toplam += intRakam;
          ciftMi = !ciftMi;
      }
  
      if((toplam % 10) == 0){
        alert("Kart bilgisi geçerli.")
      }
      else{
        alert("Kart bilgisi geçersiz.")
      } 
  }
  