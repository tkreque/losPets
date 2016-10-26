function BtnCon()
		{	
            circle.setMap(null);
    		
			
			var request = $.ajax({
				url: "getAnimais.php",
				type: "POST",
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
			});
		}