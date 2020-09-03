
$("#btnRequerimento").click(function () {
    window.open('formulario.html','janela');
});

$('#dvDetalhes').hide();

function mostrarDetalhes(id)
{
	//$(elemento).removeCss("background-color", "red")
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
	
	
		
	}else{
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

var tr = $('table tr');
tr.on('click', function () {
    var self = this;
    tr.each(function(){
		if(this == self){ 
		    $(this).toggleClass('colorir');
		    mostrarDetalhes(this.id);
		}
        else {
            $(this).removeClass('colorir');
            //$('#dvDetalhes').hide();	
        }			
    })
});