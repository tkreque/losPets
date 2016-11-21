$(document).ready(function(){
	//$('#tabela').empty(); //Limpando a tabela
	$.ajax({
		type:'post',		//Definimos o m�todo HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url: 'getDados.php',//Definindo o arquivo onde ser�o buscados os dados
		success: function(dados){
			for(var i=0;dados.length>i;i++){
				//Adicionando registros retornados na tabela
				$('#tabela').append('<tr><td>'+dados[i].id+'</td><td>'+dados[i].latitude+'</td><td>'+dados[i].longitude+'</td><td>'+dados[i].info+'</td></tr>');
			}
		}
	});
});