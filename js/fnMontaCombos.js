
function fnCombos(valueParam){
	
	console.log(valueParam);
	
	var combo = "<option value=''>Selecione...</option>";
	var combobox;
	
	if(valueParam == "tag"){
		
		combobox = $("#combo2");
		//combo = "<option value=''>Selecione...</option>";
		
		var request = $.ajax({
			url: "php/getDadosTAG.php",
			type: "GET",
		}).done(function(arrayRetorno) {
			var resultado = $.parseJSON(arrayRetorno);
			var tam = arrayRetorno.length;
				console.log(resultado);
			for(i=0;i<resultado.length;i++){
				combo +="<option value="+ resultado[i] +">" + resultado[i]+"</option>";
			}
				combobox.append(combo);
				combobox.show();
				
				combobox = $("#combo3");
				combobox.empty();
				combobox.hide();
				combobox = $("#combo4");
				combobox.empty();
				combobox.hide();
				combobox = $("#combo5");
				combobox.empty();
				combobox.hide();
			});	
			
	}else if(valueParam == "porte"){
		
		combobox = $("#combo3");
		
		var request = $.ajax({
			url: "php/getDadosPORTE.php",
			type: "GET",
		}).done(function(arrayRetorno) {
			var resultado = $.parseJSON(arrayRetorno);
			var tam = arrayRetorno.length;
				console.log(resultado);
			for(i=0;i<resultado.length;i++){
				var aux="";
				if(resultado[i] == "P"){
					aux = "Pequeno";
				}else if(resultado[i] == "M"){
					aux = "Médio";	
				}else if(resultado[i] == "G"){
					aux = "Grande";
				}			
				combo +="<option value="+ resultado[i] +">" + aux +"</option>";
			}
				combobox.append(combo);
				combobox.show();
				
				combobox = $("#combo2");
				combobox.empty();
				combobox.hide();
				combobox = $("#combo4");
				combobox.empty();
				combobox.hide();
				combobox = $("#combo5");
				combobox.empty();
				combobox.hide();
			});
	}else if(valueParam == "raca"){
		
		combobox = $("#combo4");
		
		var request = $.ajax({
			url: "php/getDadosRACA.php",
			type: "GET",
		}).done(function(arrayRetorno) {
			var resultado = $.parseJSON(arrayRetorno);
			var tam = arrayRetorno.length;
				console.log(resultado);
			for(i=0;i<resultado.length;i++){			
				combo +="<option value="+ resultado[i] +">" + resultado[i] +"</option>";
			}				
				combobox.append(combo);
				combobox.show();
				
				combobox = $("#combo2");
				combobox.empty();
				combobox.hide();
				combobox = $("#combo3");
				combobox.empty();
				combobox.hide();
				combobox = $("#combo5");
				combobox.empty();
				combobox.hide();
			});				
	}else if(valueParam == "racatag"){
		
			var combo2 = $("#combo5");
			combo2.append("<option value='valor 1'> Valor 1 </option>");
			combo2.show();
		
				combobox = $("#combo2");
				combobox.empty();
				combobox.hide();
				combobox = $("#combo3");
				combobox.empty();
				combobox.hide();
				combobox = $("#combo4");
				combobox.empty();
				combobox.hide();
	}
}