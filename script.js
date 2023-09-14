function validateemail()  
{  
var x=document.form.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n");  
  return false;  
  }  
  else{
    alert("email Validated");
  }
  return true;
}  

var i=1;

function add_to_cart1(){
  document.getElementById("add_to_carts1").innerHTML="Added to cart";
  document.getElementById("cart").innerHTML=this.i;
  this.i=this.i+1;
}
function add_to_cart2(){
  document.getElementById("add_to_carts2").innerHTML="Added to cart";
  document.getElementById("cart").innerHTML=this.i;
  this.i=this.i+1;  
}
function add_to_cart3(){
  document.getElementById("add_to_carts3").innerHTML="Added to cart";
  document.getElementById("cart").innerHTML=this.i;
  this.i=this.i+1;  
}
function add_to_cart4(){
  document.getElementById("add_to_carts4").innerHTML="Added to cart";
  document.getElementById("cart").innerHTML=this.i;
  this.i=this.i+1; 
}
function add_to_cart5(){
  document.getElementById("add_to_carts5").innerHTML="Added to cart";
  document.getElementById("cart").innerHTML=this.i;
  this.i=this.i+1;  
}
function add_to_cart6(){
  document.getElementById("add_to_carts6").innerHTML="Added to cart";
  document.getElementById("cart").innerHTML=this.i;
  this.i=this.i+1;  
}
function add_to_cart7(){
  document.getElementById("add_to_carts7").innerHTML="Added to cart";
  document.getElementById("cart").innerHTML=this.i;
  this.i=this.i+1;  
}
function add_to_cart8(){
  document.getElementById("add_to_carts8").innerHTML="Added to cart";
  document.getElementById("cart").innerHTML=this.i;
  this.i=this.i+1;  
}
function add_to_cart9(){
  document.getElementById("add_to_carts9").innerHTML="Added to cart";
  document.getElementById("cart").innerHTML=this.i;
  this.i=this.i+1;  
}
function add_to_cart10(){
  document.getElementById("add_to_carts10").innerHTML="Added to cart";
  document.getElementById("cart").innerHTML=this.i;
  this.i=this.i+1;  
}
function add_to_cart11(){
  document.getElementById("add_to_carts11").innerHTML="Added to cart";
  document.getElementById("cart").innerHTML=this.i;
  this.i=this.i+1;  
}
function add_to_cart12(){
  document.getElementById("add_to_carts12").innerHTML="Added to cart";
  document.getElementById("cart").innerHTML=this.i;
  this.i=this.i+1;  
}