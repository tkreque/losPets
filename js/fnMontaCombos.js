
function fnCombos(valueParam){
	
	console.log(valueParam);
	
	var combo = "<option value=''>Selecione...</option>";
	var combobox;
	var frm;
	
	if(valueParam == "tag"){
		
		combobox = $("#combo2");
		
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
					aux = "PEQUENO";
				}else if(resultado[i] == "M"){
					aux = "MÉDIO";	
				}else if(resultado[i] == "G"){
					aux = "GRANDE";
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
			
	}else if(valueParam == "mult"){
		
		console.log("Parametro MULT!!" + valueParam);
		
		frm = $("#frm6");		
		frm.show();
			
	}
}

function fnCombo2(valueParam){
	
	var combobox = $("#combo2");
	var frm = $("#frm2");
	
//--------------------------------------------------------	
			circle.setMap(null);
    		
			console.log(valueParam);
			
			var request = $.ajax({
				url: "php/getTag.php",
				type: "POST",
				data: "tag=" + valueParam,
				dataType: "json"
			}).done(function(dados) {
				console.log(dados);
				for (var i = 0; i < markers_on_map.length; i++ ) {
                     markers_on_map[i].setMap(null);
                  }
                  markers_on_map.length = 0;
				
				var marker,i;
				for(i=0;i< dados.length; i++){
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(dados[i].ani_latitude,dados[i].ani_longitude),
						map: map,
						animation: google.maps.Animation.DROP,
						title: dados[i].ani_nome,
						infowindow: new google.maps.InfoWindow({
                            content: "<p>Nome: "+dados[i].ani_nome+"<br />Raça: "+dados[i].raca_nome+"</p>"
                        })
					});
					markers_on_map.push(marker);
					google.maps.event.addListener(marker, 'click', function() {
                        this.infowindow.open(map, this);
                    }); 
				}
			}).fail(function(jqXHR, textStatus ) {
				console.log("Request failed: " + textStatus);
				alert("\nATENÇÃO:\nNenhum animal localizado!");
			});
//--------------------------------------------------------
	combobox.empty();
	combobox.hide();
	frm.hide();
	
	
	var padrao = "Selecionar por...";
	combobox = $("#combo1");
	combobox.val(padrao);
}

function fnCombo3(valueParam){
	
	var combobox = $("#combo3");
	
//-------------------------------------------------------------	
            circle.setMap(null);
    		
			console.log(valueParam);
			
			var request = $.ajax({
				url: "php/getPorte.php",
				type: "POST",
				data: "porte=" + valueParam,
				dataType: "json"
			}).done(function(dados) {
				console.log(dados);
				for (var i = 0; i < markers_on_map.length; i++ ) {
                     markers_on_map[i].setMap(null);
                  }
                  markers_on_map.length = 0;
				
				var marker,i;
				for(i=0;i< dados.length; i++){
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(dados[i].ani_latitude,dados[i].ani_longitude),
						map: map,
						animation: google.maps.Animation.DROP,
						title: dados[i].ani_nome,
						infowindow: new google.maps.InfoWindow({
                            content: "<p>Nome: "+dados[i].ani_nome+"<br />Raça: "+dados[i].raca_nome+"</p>"
                        })
					});
					markers_on_map.push(marker);
					google.maps.event.addListener(marker, 'click', function() {
                        this.infowindow.open(map, this);
                    }); 
				}
			}).fail(function(jqXHR, textStatus ) {
				console.log("Request failed: " + textStatus);
				alert("\nATENÇÃO:\nNenhum animal localizado!");
			});
//-------------------------------------------------------------	
	combobox.hide();
	combobox.empty();
	
	var padrao = "Selecionar por...";
	combobox = $("#combo1");
	combobox.val(padrao);
}

function fnCombo4(valueParam){
	
	var combobox = $("#combo4");
	
//-------------------------------------------------------------
			circle.setMap(null);
    		
			console.log(valueParam);
			
			var request = $.ajax({
				url: "php/getRaca.php",
				type: "POST",
				data: "raca=" + valueParam,
				dataType: "json"
			}).done(function(dados) {
				
				if(dados.length <=0){
					alert("Dados vazios...");
				}
				
				console.log(dados);
				for (var i = 0; i < markers_on_map.length; i++ ) {
                     markers_on_map[i].setMap(null);
                  }
                  markers_on_map.length = 0;
				
				var marker,i;
				for(i=0;i< dados.length; i++){
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(dados[i].ani_latitude,dados[i].ani_longitude),
						map: map,
						animation: google.maps.Animation.DROP,
						title: dados[i].ani_nome,
						infowindow: new google.maps.InfoWindow({
                            content: "<p>Nome: "+dados[i].ani_nome+"<br />Raça: "+dados[i].raca_nome+"</p>"
                        })
					});
					markers_on_map.push(marker);
					google.maps.event.addListener(marker, 'click', function() {
                        this.infowindow.open(map, this);
                    }); 
				}
			}).fail(function(jqXHR, textStatus ) {
				console.log("Request failed: " + textStatus);
				alert("\nATENÇÃO:\nNenhum animal localizado!");
			});
//-------------------------------------------------------------
	
	combobox.hide();
	combobox.empty();
	
	var padrao = "Selecionar por...";
	combobox = $("#combo1");
	combobox.val(padrao);
}

function fnCombo5(valueParam){
	
	var combobox = $("#combo5");
	
	alert("Selecionado: " + valueParam);
	
	combobox.hide();
	combobox.empty();
	
	var padrao = "Selecionar por...";
	combobox = $("#combo1");
	combobox.val(padrao);
}

function fechaMult(){
	var padrao = "Selecionar por...";
	var frm = $("#frm6");
	
	combobox = $("#combo1");
	combobox.val(padrao);
	frm.hide();
}

