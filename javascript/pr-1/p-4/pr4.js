 var salary=parseInt(prompt("enter your salary:-"));
 var hra = parseInt(prompt("enter yopur HRA:-"));
 var da=parseInt(prompt("enter your DA:-"));
 var ta=parseInt(prompt("enter your TA:-"));

     var HRA=(salary/100)*hra;
     var DA=(salary/100)*da;
     var TA=(salary/100)*ta;

     var gross = salary+HRA+DA+TA;

     document.write(`<h1> ${gross}</h1>`);