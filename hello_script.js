
// setTimeout(function(){ 
//   console.log("==================");
//   document.getElementById("hello_complex").innerHTML = "Hello Worldds";
// }, 3000);


var calculate = function() {
  var total_price = document.getElementById('total_price').value;
  var total_shipment = document.getElementById('total_ship').value; 
  var product_price = document.getElementById('product_price').value; 
  var shipment_rate = total_shipment/total_price;
  var shipment_cost = product_price*shipment_rate;
  var product_price_with_shiment = product_price + shipment_cost;
  document.getElementById('result').innerHTML = "Shipment cost: "+ Math.round(shipment_cost * 100) / 100
 + " \nProduct price including shipment: " + Math.round(product_price_with_shiment * 100) / 100;
}
