function BtnCon() {
	circle.setMap(null);


	var request = $.ajax({
		url: "php/getAnimais.php",
		type: "POST",
		dataType: "json"
	}).done(function(dados) {
		console.log(dados);
		for (var i = 0; i < markers_on_map.length; i++) {
			markers_on_map[i].setMap(null);
		}
		markers_on_map.length = 0;

		var marker, i;
		for (i = 0; i < dados.length; i++) {
			var ic = '';
			switch (dados[i].sit_nome) {
                        case 'ADOCAO':
                            switch (dados[i].tipoani_nome) {
                                case 'CACHORRO':
                                    ic = 'img/icons/blue/dog.png';
                                    break;
                                case 'GATO':
                                    ic = 'img/icons/blue/cat.png';
                                    break;
                                case 'PASSARO':
                                    ic = 'img/icons/blue/bird.png';
                                    break;
                                case 'COELHO':
                                    ic = 'img/icons/blue/bunny.png';
                                    break;
                                case 'PORCO':
                                    ic = 'img/icons/blue/pig.png';
                                    break;
                                default:
                                    ic = 'img/icons/blue/zoo.png';
                            }
                            break;
                        case 'ACHADO':
                            switch (dados[i].tipoani_nome) {
                                case 'CACHORRO':
                                    ic = 'img/icons/green/dog.png';
                                    break;
                                case 'GATO':
                                    ic = 'img/icons/green/cat.png';
                                    break;
                                case 'PASSARO':
                                    ic = 'img/icons/green/bird.png';
                                    break;
                                case 'COELHO':
                                    ic = 'img/icons/green/bunny.png';
                                    break;
                                case 'PORCO':
                                    ic = 'img/icons/green/pig.png';
                                    break;
                                default:
                                    ic = 'img/icons/green/zoo.png';
                            }
                            break;
                        case 'PERDIDO':
                            switch (dados[i].tipoani_nome) {
                                case 'CACHORRO':
                                    ic = 'img/icons/red/dog.png';
                                    break;
                                case 'GATO':
                                    ic = 'img/icons/red/cat.png';
                                    break;
                                case 'PASSARO':
                                    ic = 'img/icons/red/bird.png';
                                    break;
                                case 'COELHO':
                                    ic = 'img/icons/red/bunny.png';
                                    break;
                                case 'PORCO':
                                    ic = 'img/icons/red/pig.png';
                                    break;
                                default:
                                    ic = 'img/icons/red/zoo.png';
                            }
                            break;
                        default:
                           switch (dados[i].tipoani_nome) {
                                case 'CACHORRO':
                                    ic = 'img/icons/yellow/dog.png';
                                    break;
                                case 'GATO':
                                    ic = 'img/icons/yellow/cat.png';
                                    break;
                                case 'PASSARO':
                                    ic = 'img/icons/yellow/bird.png';
                                    break;
                                case 'COELHO':
                                    ic = 'img/icons/yellow/bunny.png';
                                    break;
                                case 'PORCO':
                                    ic = 'img/icons/yellow/pig.png';
                                    break;
                                default:
                                    ic = 'img/icons/yellow/zoo.png';
                            }
                    }
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(dados[i].ani_latitude, dados[i].ani_longitude),
				map: map,
				animation: google.maps.Animation.DROP,
				title: dados[i].ani_nome,
				icon: ic,
				infowindow: new google.maps.InfoWindow({
					content: "<img src=" + dados[i].ani_imgpath + " style= 'border-radius: 50%; height:70px; width:70px;'></img><p><br />" +
						"Nome: " + dados[i].ani_nome + "<br />" +
						"Animal: " + dados[i].tipoani_nome + "<br />" +
						"Raça: " + dados[i].raca_nome + "<br />" +
						"Porte: " + dados[i].ani_porte + "<br />" +
						"Situação: " + dados[i].sit_nome + "</p>"
				})
			});
			markers_on_map.push(marker);
			google.maps.event.addListener(marker, 'click', function() {
				this.infowindow.open(map, this);
			});
		}
	}).fail(function(jqXHR, textStatus) {
		console.log("Request failed: " + textStatus);
	});
}

function BtnConsultaTag(tag) {
	circle.setMap(null);

	console.log(tag);

	var request = $.ajax({
		url: "getTag.php",
		type: "POST",
		data: "tag=" + tag,
		dataType: "json"
	}).done(function(dados) {
		console.log(dados);
		for (var i = 0; i < markers_on_map.length; i++) {
			markers_on_map[i].setMap(null);
		}
		markers_on_map.length = 0;

		var marker, i;
		for (i = 0; i < dados.length; i++) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(dados[i].ani_latitude, dados[i].ani_longitude),
				map: map,
				animation: google.maps.Animation.DROP,
				title: dados[i].ani_nome,
				infowindow: new google.maps.InfoWindow({
					content: "<p>Nome: " + dados[i].ani_nome + "<br />Raça: " + dados[i].raca_nome + "</p>"
				})
			});
			markers_on_map.push(marker);
			google.maps.event.addListener(marker, 'click', function() {
				this.infowindow.open(map, this);
			});
		}
	}).fail(function(jqXHR, textStatus) {
		console.log("Request failed: " + textStatus);
	});
}

function BtnConsultaPorte(porte) {
	circle.setMap(null);

	console.log(porte);

	var request = $.ajax({
		url: "getPorte.php",
		type: "POST",
		data: "porte=" + porte,
		dataType: "json"
	}).done(function(dados) {
		console.log(dados);
		for (var i = 0; i < markers_on_map.length; i++) {
			markers_on_map[i].setMap(null);
		}
		markers_on_map.length = 0;

		var marker, i;
		for (i = 0; i < dados.length; i++) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(dados[i].ani_latitude, dados[i].ani_longitude),
				map: map,
				animation: google.maps.Animation.DROP,
				title: dados[i].ani_nome,
				infowindow: new google.maps.InfoWindow({
					content: "<p>Nome: " + dados[i].ani_nome + "<br />Raça: " + dados[i].raca_nome + "</p>"
				})
			});
			markers_on_map.push(marker);
			google.maps.event.addListener(marker, 'click', function() {
				this.infowindow.open(map, this);
			});
		}
	}).fail(function(jqXHR, textStatus) {
		console.log("Request failed: " + textStatus);
	});
}

function BtnPerfil(id) {
	console.log(id);
	var request = $.ajax({
		url: "php/getAnimal.php",
		type: "POST",
		data: "animal=" + id,
		dataType: "json"
	}).done(function(dados) {
		console.log(dados);
		
		var html = "<html><head>"+
				"<title>"+dados[0].ani_nome+"</title>" +
				"</head>"+
				"<body>"+dados[0].ani_nome+"<br />"+dados[0].raca_nome+"</body>"+
				"</html>";
		
		console.log(html);
		var opened = window.open("");
		opened.document.write(html);
		//window.location.replace("https://stackoverflow.com");
	});
}
