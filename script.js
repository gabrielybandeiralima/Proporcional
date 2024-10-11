function proporcoes(){
    var n1= parseFloat(document.getElementById("n1").value);
    var n2= parseFloat (document.getElementById("n2").value);
    var n3=parseFloat (document.getElementById("n3").value);
    var pp=(document.getElementById("proporcional").checked);

    if(isNaN(n1)||(n1 ===""))
        {
        window.alert("Digite um numero!!!")
        }
        else if(isNaN(n2)||(n2 ===""))
        {
        window.alert("Digite o segundo numero!!!")
         }
        else if(isNaN(n3)||(n3 ===""))
         {
         window.alert("Digite o terceiro numero!!!")
          }
          if (pp)
            {
            document.getElementById("resp").value=(n2*n3)/n1;
          }
          else{
            document.getElementById("resp").value=(n1*n2)/n3;
          }
}