
// llamar datos desde base de datos conJQuery 
 $.get('/ejemplo.json', function(datos, estado){
console.log(datos);
 })



 $.('button').click(function(){
   
   $.post('url',{ account_lifecycle_event: '<riquered>'}, function () {
     
   })

 })



 //
 setTimeout(() => {
   console.log('esto es asincronia');
 }, 3000);