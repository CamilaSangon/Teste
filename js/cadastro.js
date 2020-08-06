$("#btnVoltarHom02").click(function () {
    window.open('aposentadorias.html','janela');
});

$("#btnVoltarHom01").click(function () {
    window.open('aposentadorias.html','janela');
});

$("#btnVoltarCad01").click(function () {
    window.open('aposentadorias_novas.html','janela');
});

$("#btnVoltarCad03").click(function () {
    window.open('aposentadorias_novas.html','janela');
});

$("#btnVoltarCad02").click(function () {
    window.open('aposentadorias_novas.html','janela');
});

 function MostrarPainelAba(nomeBotao) {
   if (nomeBotao == 'btnVoltarHom01_1') {
	//$('#myTabs a[href="##DadosAposentados"]').tab('show');
  }
 }

  $('#dvDetalhes').hide();
  $('#btnFechar').hide();
 
 function mostrarEnvios(){
	 $('#dvDetalhes').show();	 
	 $('#btnFechar').show();
 
 }
 
 $('#btnFechar').click(function(){
	$('#dvDetalhes').hide();
	$('#btnFechar').hide();
 });
 
