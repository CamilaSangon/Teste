$("#btnVoltarAposentadorias").click(function () {
    window.open('index.html','janela');
});

$("#btnVoltarAposNovas").click(function () {
    window.open('index.html','janela');
});

$('#dvDetalhes').hide();
$("#btnFechar").hide();

$("#btnFechar").click(function(){
	$('#dvDetalhes').hide();
	$("#btnFechar").hide();	
});

function mostrarDetalhes(id)
{
	//alert(id);
	if (id == "1")
	{
		$('#dvDetalhes').show();
		$('#cad_01').show();
		$('#cad_02').hide();	
		$('#cad_03').hide();
		$("#btnFechar").show();		
	}
	else if (id == "2")
	{
		$('#dvDetalhes').show();
		$('#cad_01').hide();
		$('#cad_02').show();	
		$('#cad_03').hide();
		$("#btnFechar").show();
	}	
	else if (id == "3")
	{
		$('#dvDetalhes').show();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').show();
		$("#btnFechar").show();		
	
	}else{
		$('#dvDetalhes').hide();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').hide();
		$("#btnFechar").hide();	
	}
}







