
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
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').hide();
		$("#btnFechar").show();		
	}
	else if (id == "2")
	{
		$('#dvDetalhes').show();
		$('#cad_01').hide();
		$('#cad_02').show();	
		$('#cad_03').hide();
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').hide();
		$("#btnFechar").show();
	}
	else if (id == "3")
	{
		$('#dvDetalhes').show();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').show();
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').hide();
		$("#btnFechar").show();
	}
	else if (id == "4")
	{
		$('#dvDetalhes').show();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').hide();
		$('#cad_04').show();
		$('#cad_05').hide();
		$('#cad_06').hide();
		$("#btnFechar").show();
	}	
	else if (id == "5")
	{
		$('#dvDetalhes').show();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').hide();
		$('#cad_04').hide();
		$('#cad_05').show();
		$('#cad_06').hide();
		$("#btnFechar").show();
	}	
	else if (id == "6")
	{
		$('#dvDetalhes').show();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').hide();
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').show();
		$("#btnFechar").show();
	}		
	else{
		$('#dvDetalhes').hide();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').hide();
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').hide();
		$("#btnFechar").hide();	
	}
}




//Tela - Menu/Benefícios/Pensões 
$('#dvTodas').hide();
$('#dvRegimes').hide();

$('#btnConsultar').click(function(){
	
	if ($("#radio1").is(":checked"))
	{
		$('#dvTodas').show();
		$('#dvRegimes').hide();
	}else
	
	{	$('#dvTodas').hide();
		$('#dvRegimes').show();
	}
	
});


//Tela - Menu/Homologações/Aposentadoria 
$('#dvComTriagem').hide();
$('#dvSemTriagem').hide();

$('#btnConsultarHom').click(function(){
	
	if ($("#radio1").is(":checked"))
	{
		$('#dvComTriagem').show();
		$('#dvSemTriagem').hide();
	}else
	
	{	$('#dvComTriagem').hide();
		$('#dvSemTriagem').show();
	}
	
});






