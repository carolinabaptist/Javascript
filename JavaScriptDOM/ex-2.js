function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++){
    if (x.elements[i].value!='Submit'){
      console.log(x.elements[i].value);
    }  
  }
}

/*
o for vai percorrer cada elemento do formulário:
x.elements[0] → <input type="text" name="fname" value="David">
x.elements[1] → <input type="text" name="lname" value="Beckham">
x.elements[2] → <input type="submit" value="Submit">

O código verifica se o valor não é "Submit", evitando exibir o texto do botão no console.

*/
