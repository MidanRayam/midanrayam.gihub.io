var ready;

ready = function () {
   setTimeout(function(){ 
     document.getElementById("hello_complex").innerHTML = "Hello World";
   }, 3000);
};


$(document).ready(ready);
$(document).on('page:load', ready);
