$(document).ready(function(){

$('#dvDetalhes').hide();
$('#btnFechar').hide();



});
 
function MostrarEnvios() {
	$('#dvDetalhes').show();
	$('#btnFechar').show();
  }
$("#btnFechar").click(function () {
	$('#dvDetalhes').hide();
	$('#btnFechar').hide();
});

$("#btnFormulario").click(function () {
	window.open('formulario1.html','janela');
});

$("#btnFormulario2").click(function () {
	window.open('formulario2.html','janela');
});