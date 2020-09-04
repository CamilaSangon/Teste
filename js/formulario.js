
$("#dvDadosPensoes").hide();

$("#btnVoltar").click(function () {
    window.open('cadastro_hom_02.html','janela');
});

$("#btnVoltar01").click(function () {
    window.open('cadastro_hom_01.html','janela');
});


$("#btnVoltarForm03").click(function () {
    window.open('cadastro_novo_03.html','janela');
});

$("#btnVoltarForm02").click(function () {
    window.open('cadastro_novo_02.html','janela');
});

$("#btnVoltarForm01").click(function () {
    window.open('cadastro_novo_01.html','janela');
});




$("#entidade").change(function () {
   if ($("#entidade").val()== "3")
   {
	  $("#dvUf").hide();
	  $("#dvEstados").hide();
	  $("#dvMunicipio").hide();
	  
	  $("#dvUf01").hide();
	  $("#dvEstados01").hide();
	  $("#dvMunicipio01").hide();
   }else{
	  $("#dvUf").show();
	  $("#dvEstados").show();
	  $("#dvMunicipio").show();
	  
	  $("#dvUf01").show();
	  $("#dvEstados01").show();
	  $("#dvMunicipio01").show();
	   
   }
 });
 
 $("#tipoBeneficio").change(function () {
   if ($("#tipoBeneficio").val()== "2")
   {
	  $("#dvDadosPensoes").show();
	  $("#dvDescAposentadoria").hide();
	  $("#dvCmbAposentadoria").hide();
	  $("#dvTempAposentadoria").hide();
	  $("#dvTemposTotais").hide();
	  $("#dvDadosAposentadoria").hide();
	
   }else{
	  $("#dvDadosPensoes").hide();
	  $("#dvDescAposentadoria").show();
	  $("#dvCmbAposentadoria").show();
	  $("#dvTempAposentadoria").show();
	  $("#dvTemposTotais").show();
	  $("#dvDadosAposentadoria").show();

   }
 });
 $(document).ready(function() {
	$('input').prop('disabled', true);
	$('select').prop('disabled', true);
 });
    
