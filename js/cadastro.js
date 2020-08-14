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

$("#btnFormulario3").click(function () {
	window.open('formulario3.html','janela');
});

$("#btnFormulario4").click(function () {
	window.open('formulario4.html','janela');
});

$("#btnFormulario5").click(function () {
	window.open('formulario5.html','janela');
});

$("#btnFormulario6").click(function () {
	window.open('formulario6.html','janela');
});

$("#btnFormularioHom").click(function () {
	window.open('formulario_hom_4.html','janela');
});

$("#btnFormularioHom2").click(function () {
	window.open('formulario_hom_2.html','janela');
});