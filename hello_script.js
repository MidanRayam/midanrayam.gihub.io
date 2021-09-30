
setTimeout(function(){ 
  console.log("==================");
  document.getElementById("hello_complex").innerHTML = "Hello Worldds";
}, 3000);


var calculate = function() {
  var total_price = document.getElementById('textbox_id').value;
  var total_shipment = document.getElementById('total_ship').value; 
  var product_price = document.getElementById('product_price').value; 
  document.getElementById('result').innerHTML = product_price;
}
