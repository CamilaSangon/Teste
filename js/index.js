//Tela - Dashboard/Novas Concessões de Aposentadorias

$(document).ready(function(){
   $("#tbAposentadoria>tbody>tr>td").each(function(index, elemento){
         $(elemento).bind('change', function(){
			$(elemento).find('select').attr('data-toggle', 'modal');
            $(elemento).find('select').attr('data-target', '#modal');

         });
     });
	 
	  $("#tbPensoes>tbody>tr>td").each(function(index, elemento){
         $(elemento).bind('change', function(){
            $(elemento).find('select').attr('data-toggle', 'modal');
            $(elemento).find('select').attr('data-target', '#modal');
         });
     });
});