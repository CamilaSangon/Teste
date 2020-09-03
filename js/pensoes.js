$(document).ready(function() {
	$('#dvDetalhes01').hide();
	$('#dvDetalhes02').hide();
	$('#dvDetalhes').hide();
	$('#dvTodas').hide();
	$('#dvRegimes').hide();
	$('#dv01').hide();
	$('#dv02').hide();
	$('#dvDados').hide();
	CarregaDados();
	CarregaDadosRegime();
} );


function CarregaDados(){
	//$('#dataTable tbody').empty();
	$('#tbTodas').DataTable({
		"pagingType": "numbers",
		"searching": true,
		"info": true,
		"bLengthChange": false,
		"pageLength": 10
	});

}

function CarregaDadosRegime(){
	//$('#tbRegimes tbody').empty();
	$('#tbRegimes').DataTable({
		"pagingType": "numbers",
		"searching": true,
		"info": true,
		"bLengthChange": false,
		"pageLength": 10
	});

}


function mostrarDetalhes(id)
{
	//alert(id);
	if (id == "1")
	{
		$('#dvDetalhes').show();
		$('#dvDetalhes01').hide();
		$('#dvDetalhes02').hide();
		$('#cad_01').show();
		$('#cad_02').hide();	
		$('#cad_03').hide();
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').hide();
			
	}
	else if (id == "2")
	{
		$('#dvDetalhes').show();
		$('#dvDetalhes01').hide();
		$('#dvDetalhes02').hide();
		$('#cad_01').hide();
		$('#cad_02').show();	
		$('#cad_03').hide();
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').hide();
		
	}

	else if (id == "3")
	{
		$('#dvDetalhes').show();
		$('#dvDetalhes01').hide();
		$('#dvDetalhes02').hide();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').show();
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').hide();
		
	}
	
	else{
		$('#dvDetalhes01').hide();
		$('#dvDetalhes02').hide();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').hide();
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').hide();
		
	}
}




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


var tr = $('table tr');
tr.on('click', function () {
    var self = this;
    tr.each(function(){
		if(this == self){ 
			$(this).toggleClass('colorir');
			mostrarDetalhes(this.id);
		}
		else{
			$(this).removeClass('colorir');	
			//$('#dvDetalhes').hide();
		} 			
    })
});


//Tela - Dashboard Cards(Pensões) 


$('#btnConsultar').click(function(){
	//alert($("#cmbBeneficio").val());
	if ($("#cmbBeneficio").val()=='1')
	{
		$('#dvTodas').show();
		$('#dvRegimes').hide();
	}else
	
	{	$('#dvTodas').hide();
		$('#dvRegimes').show();
		
	}
	
});

//Tela - Menu benefícios (Pensões)
/*$('#btnConsultarBenef').click(function(){

	//alert($("#cmbBeneficio").val());
	if ($("#cmbBeneficio").val()=='1')
	{
		$('#dvDados').show();
		$('#dv02').show();
		$('#dvDetalhes').hide();
		$('#dv01').hide();
	}else	
	{	
		$('#dvDados').show();
		$('#dvDetalhes').hide();
		$('#dv01').show();
		$('#dv02').hide();
		
	}
	
});*/

$("#cmbBeneficio").change(function(){
	if ($("#cmbBeneficio").val()=='1')
	{
		$('#dvDados').show();
		$('#dv02').show();		
		$('#dv01').hide();
	}else	
	{	
		$('#dvDados').show();
		$('#dv01').show();
		$('#dv02').hide();
		
	}

});






