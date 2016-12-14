var map;
var markers_on_map = [];
var radius = 1500;
var mRadius;
var coord = {
    lat: -30.03518581,
    lng: -51.22660625
};
var circle = {};
var searchBox;

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: coord,
        zoom: 12
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var coord = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(coord);
            setMarkers(coord);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    }
    else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });
    
    legend();
}

function autoComplete() {
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {

        var places = searchBox.getPlaces();

        limpaMarcacao();

        if (places.length == 0) {
            return;
        }
        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();

        places.forEach(function(place) {

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            }
            else {
                bounds.extend(place.geometry.location);
            }


            coord = {
                lat: parseFloat(place.geometry.location.lat()),
                lng: parseFloat(place.geometry.location.lng())
            }
            setMarkers(coord);
            map.fitBounds(bounds);

        });
    })
}

function setMarkers(gp) {
    $.ajax({
        type: 'post', //Definimos o m�todo HTTP usado
        dataType: 'json', //Definimos o tipo de retorno
        url: 'php/getDados.php', //Definindo o arquivo onde ser�o buscados os dados
        success: function(dados) {
            mRadius = new google.maps.Marker({
                position: new google.maps.LatLng(gp),
                map: map
            });
            circle = new google.maps.Circle({
                map: map,
                radius: radius,
                fillColor: '#AA0000'
            });
            circle.bindTo('center', mRadius, 'position');

            var address_lat_lng = new google.maps.LatLng(gp);

            if (circle) map.fitBounds(circle.getBounds());
            for (var j = 0; j < dados.length; j++) {

                (function(location) {
                    var marker_lat_lng = new google.maps.LatLng(location.ani_latitude, location.ani_longitude);
                    var distance_from_location = google.maps.geometry.spherical.computeDistanceBetween(address_lat_lng, marker_lat_lng);
                    var ic = '';
                    var botao = '';
                    switch (location.sit_nome) {
                        case 'ADOCAO':
                            switch (location.tipoani_nome) {
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
                            botao = "<input class='btn btn-primary btn-block' type='button' value='Eu quero adotar' name='btn_perfil' onclick='BtnPerfil(" + location.ani_id + ")' />"
                            break;
                        case 'ACHADO':
                            switch (location.tipoani_nome) {
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
                            botao = "<input class='btn btn-primary btn-block' type='button' value='É Meu' name='btn_perfil' onclick='BtnPerfil(" + location.ani_id + ")' />"
                            break;
                        case 'PERDIDO':
                            switch (location.tipoani_nome) {
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
                            botao = "<input class='btn btn-primary btn-block' type='button' value='Eu Encontrei' name='btn_perfil' onclick='BtnPerfil(" + location.ani_id + ")' />"
                            break;
                        default:
                           switch (location.tipoani_nome) {
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
                    if (distance_from_location <= radius) {
                        var new_marker = new google.maps.Marker({
                            position: marker_lat_lng,
                            map: map,
                            animation: google.maps.Animation.DROP,
                            title: location.ani_nome,
                            icon: ic,
                            infowindow: new google.maps.InfoWindow({
                                content: "<img src=" + location.ani_imgpath + " style= 'border-radius: 50%; height:70px; width:70px;'></img><p><br />" +
                                    "Nome: " + location.ani_nome + "<br />" +
                                    "Animal: " + location.tipoani_nome + "<br />" +
                                    "Raça: " + location.raca_nome + "<br />" +
                                    "Porte: " + location.ani_porte + "<br />" +
                                    "Situação: " + location.sit_nome + "</p>" + botao
                            })
                        });
                        markers_on_map.push(new_marker);
                        google.maps.event.addListener(new_marker, 'click', function() {
                            this.infowindow.open(map, this);
                        });

                    }
                })(dados[j]);
            }
        },
        error: function() {
            console.log('erro')
        }
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    map.setCenter(new google.maps.LatLng(lat, lng));
}

function ajustaRaio(raio) {
    radius = raio * 1000;
    limpaMarcacao();
    setMarkers(coord);
}

function limpaMarcacao() {
    for (var i = 0; i < markers_on_map.length; i++) {
        markers_on_map[i].setMap(null);
    }
    markers_on_map.length = 0;
    mRadius.setMap(null);
    circle.setMap(null);
}

function legend() {
    var iconBase = 'img/icons/';
    var icons = {
        perdido: {
            name: 'Animal Perdido',
            icon1: iconBase + 'red/dog.png',
            icon2: iconBase + 'red/cat.png'
        },
        encontrado: {
            name: 'Animal Encontrado',
            icon1: iconBase + 'green/dog.png',
            icon2: iconBase + 'green/cat.png'
        },
        doacao: {
            name: 'Animal para Adoção',
            icon1: iconBase + 'blue/dog.png',
            icon2: iconBase + 'blue/cat.png'
        },
        visto: {
            name: 'Animal Avistado',
            icon1: iconBase + 'yellow/dog.png',
            icon2: iconBase + 'yellow/cat.png'
        }
    };
    var legend = document.getElementById('legend');
    for (var key in icons) {
        var type = icons[key];
        var name = type.name;
        var icon1 = type.icon1;
        var icon2 = type.icon2;
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icon1 + '"><img src="' + icon2 + '"> ' + name;
        legend.appendChild(div);
    }

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}