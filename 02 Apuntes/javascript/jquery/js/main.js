
$('#nuevaTarea').on('click', function(){
  var texto = prompt('Introduce el texto de la tarea');
  if(texto!==null){
    $('#todoList').append('<li class="list-group-item"><input type="checkbox"> ' + texto + '</li>');
    $('#todoList input[type=checkbox]').on('click', function(e){
      var padre = $(e.currentTarget).parent();
      if($(padre).css('text-decoration') == 'line-through'){
        $(padre).css('text-decoration', 'none');
      }else{
        $(padre).css('text-decoration', 'line-through');
      }
    });
  }
});

$('#borrarTerminadas').on('click', function(){
  $('#todoList li').each(function(){
    //this hace rerefencia a cada elemento individual en cada iteración del bucle
    if($(this).css('text-decoration') == 'line-through'){
      $(this).remove();
    }
  });
});

$('#reset').on('click', function(){
  $('#todoList li').remove();
});

$("#tamano").keyup(function() {
  var t = $('#tamano').val();
  var colores = ['red', 'pink', 'blue', 'brown'];
  var aleatorio = parseInt(Math.random() * 10 % colores.length);
  $('.pelota').animate({
    width: t,
    height: t
  });

});


$('#calcular').on('click', function(){

  var numero1 = parseInt($('#n1').val());
  var numero2 = parseInt($('#n2').val());
  var resultado = 0;

  if($("#suma").is(":checked")){
    resultado = numero1 + numero2;
  }else{
    resultado = numero1 - numero2;
  }

  $('#resultado').text('El resultado es: ' + resultado);

});









