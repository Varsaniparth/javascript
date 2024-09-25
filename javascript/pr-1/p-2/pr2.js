
var a= parseInt(prompt("enter valur of a:="));
var b= parseInt(prompt("enter valur of b:="));

a=a+b;
b=a-b;
a=a-b;

document.write(`<h1>a:-${a}</h1>`);
document.write(`<h1>b:-${b}</h1>`);