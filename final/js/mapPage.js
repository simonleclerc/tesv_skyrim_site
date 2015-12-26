
/*@TODO
 * onclick city -> travel from origin to city popup yes/no
 * on travel direction display, stop zoom
 * city icon smaller and opacity /2 when not hovered
 * (add window info on cities related to me)
 */
var geocoder;
var map;
var infowindow = new google.maps.InfoWindow();
var marker;
var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
var directionsService = new google.maps.DirectionsService;



var mapStyles = [
    {
        "elementType": "labels.icon",
        "stylers": [
            { "visibility": "off" }
        ]
    },{
        "featureType": "landscape.natural",
        "stylers": [
            { "hue": "#0008ff" },
            { "saturation": -43 },
            { "gamma": 0.97 },
            { "lightness": -4 }
        ]
    },{
        "featureType": "water",
        "stylers": [
            { "saturation": -100 },
            { "lightness": -51 },
            { "gamma": 1.2 }
        ]
    },{
        "featureType": "transit",
        "stylers": [
            { "visibility": "off" }
        ]
    },{
        "featureType": "poi",
        "stylers": [
            { "saturation": -79 },
            { "hue": "#0022ff" },
            { "lightness": -17 }
        ]
    },{
        "featureType": "road.highway",
        "stylers": [
            { "lightness": 100 },
            { "weight": 0.3 }
        ]
    },{
        "featureType": "road.arterial",
        "stylers": [
            { "visibility": "on" },
            { "hue": "#ff0011" },
            { "saturation": -100 },
            { "lightness": 29 },
            { "weight": 0.2 }
        ]
    },{
        "featureType": "road.local",
        "stylers": [
            { "visibility": "off" }
        ]
    },{
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            { "visibility": "off" }
        ]
    },{
        "elementType": "labels.text.fill",
        "stylers": [
            { "hue": "#00ccff" },
            { "saturation": 100 },
            { "lightness": 100 }
        ]
    },{
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            { "hue": "#00ff99" },
            { "saturation": -100 },
            { "lightness": -100 }
        ]
    },{
    }
];

var cities = [
    {label: 'Paris', labelXAnchor: 48, width: 100, height: 158, img: 'ico_paris', lat: 48.8566140, lnt: 2.3522219},
    {label: 'Lyon', labelXAnchor: 30, width: 146, height: 158, img: 'ico_lyon', lat: 45.7640430, lnt: 4.8356590},
    {label: 'Bordeaux', labelXAnchor: 10, width: 191, height: 158, img: 'ico_bordeaux', lat: 44.8377890, lnt: -0.5791800},
    {label: 'Nantes', labelXAnchor: 28, width: 138, height: 158, img: 'ico_nantes', lat: 47.2183710, lnt: -1.5536210},
    {label: 'Strasbourg', labelXAnchor: 40, width: 122, height: 158, img: 'ico_strasbourg', lat: 48.5734053, lnt: 7.7521113},
    {label: 'Marseille', labelXAnchor: 40, width: 109, height: 158, img: 'ico_marseille', lat: 43.2964820, lnt: 5.3697800},
    {label: 'Lille', labelXAnchor: 40, width: 114, height: 158, img: 'ico_lille', lat: 50.6292500, lnt: 3.0572560},
    {label: 'Aix-en-Provence', labelXAnchor: 40, width: 82, height: 110, img: 'ico_aixenprovence', lat: 43.529742, lnt: 5.447427},
    {label: 'Saint Brieuc   ', labelXAnchor: 40, width: 114, height: 162, img: 'ico_saintbrieuc', lat: 48.5141800, lnt: -2.7658350},
    {label: 'Quimper', labelXAnchor: 40, width: 97, height: 152, img: 'ico_quimper', lat: 47.9975420, lnt: -4.0978990},
    {label: 'Rennes', labelXAnchor: 40, width: 130, height: 166, img: 'ico_rennes', lat: 48.1172660, lnt: -1.6777926}
];


function maPosition(pos){
    var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var mapOptions = {
                zoom: 8,
                center: latlng,
                mapTypeId: 'roadmap',
                disableDefaultUI: true
            };
            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            map.setOptions({styles: mapStyles});

            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                icon: {
                    scaledSize: new google.maps.Size(56/2, 124/2),
                    url: 'images/map/current_location.png',
                    anchor: new google.maps.Point(25, 40)
                }
            });
            var citiesMarker = [];
            for(var i = 0; i < cities.length; i++) {
                var cityMarker = new MarkerWithLabel({
                    position: new google.maps.LatLng(cities[i].lat,cities[i].lnt),
                    map: map,
                    labelContent: cities[i].label,
                    labelAnchor: new google.maps.Point(cities[i].labelXAnchor, -46),
                    labelClass: "marker-label", // the CSS class for the label
                    icon: {
                        scaledSize: new google.maps.Size(cities[i].width/2, cities[i].height/2),
                        url: 'images/map/'+cities[i].img+'.png',
                        anchor: new google.maps.Point(25, 40)
                    }
                });
                citiesMarker.push(cityMarker);
            }
            // Limit the zoom level
            google.maps.event.addListener(map, 'zoom_changed', function() {
                console.log(map.getZoom());
                if (map.getZoom() < 3) {
                    map.setZoom(3);
                } else if(map.getZoom() > 12) {
                    map.setZoom(12);
                }
            });


            var destinationMarker;
            google.maps.event.addDomListener(map, 'click', function(e) {
                if (destinationMarker !== undefined) {
                    destinationMarker.set('map', null);
                }
                destinationMarker = new google.maps.Marker({
                    position: e.latLng,
                    map: map,
                    icon: {
                        scaledSize: new google.maps.Size(76/2, 138/2),
                        url: 'images/map/destination.png',
                        anchor: new google.maps.Point(23, 62)
                    }
                });
                destinationPos = destinationMarker.position;

                calculateAndDisplayRoute(directionsService, directionsDisplay, {lat: pos.coords.latitude, lnt: pos.coords.longitude},
                    {lat: e.latLng.lat(), lnt: e.latLng.lng()}
                );
            });
            for(var i = 0; i < citiesMarker.length; i++) {
                (function(cityMarker){
                    google.maps.event.addDomListener(cityMarker, 'mouseover', function(e) {
                        for(var j = 0; j < citiesMarker.length; j++) {
                            citiesMarker[j].set('labelClass', 'marker-label');
                        }
                        cityMarker.set('labelClass', 'marker-label--active');
                        TweenMax.to('.marker-label--active',.3, {x: 80, y: -60, opacity: 1, fontSize: '35px'});
                    });
                    google.maps.event.addDomListener(cityMarker, 'mouseout', function(e) {
                        TweenMax.to('.marker-label--active',.3, {x: 0, y: 0, opacity: 0, fontSize: '0px', onComplete: function(){
                            for(var j = 0; j < citiesMarker.length; j++) {
                                citiesMarker[j].set('labelClass', 'marker-label');
                            }
                        }});
                    });
                    google.maps.event.addDomListener(cityMarker, 'click', function(e) {
                        destinationPos = new google.maps.LatLng(cityMarker.get('position').lat(), cityMarker.get('position').lng());
                        calculateAndDisplayRoute(directionsService, directionsDisplay, {lat: pos.coords.latitude, lnt: pos.coords.longitude},
                            {lat: cityMarker.get('position').lat(), lnt: cityMarker.get('position').lng()}
                        );
                    });
                })(citiesMarker[i]);
            }

            var destinationPos = new google.maps.LatLng(43.529742, 5.447427);
            directionsDisplay.setMap(map);
            calculateAndDisplayRoute(directionsService, directionsDisplay, {lat: pos.coords.latitude, lnt: pos.coords.longitude},
                {lat: 43.529742, lnt: 5.447427} //Aix-en-Provence
//                        {lat: 48.8566140, lnt: 2.3522219} //Paris

            );
            E.addHandler(document, 'keypress', function(e) {
                if(e.which ===  69 || e.which === 101) {
                    map.panTo(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                } else if(e.which ===  74 || e.which === 106) {
                    map.panTo(destinationPos);
                } else if(e.which ===  76 || e.which === 108) {
                    if(directionsDisplay.getMap() === null) {
                        directionsDisplay.setMap(map);
                    } else {
                        directionsDisplay.setMap(null);
                    }
                }
            });
        } else {
            alert('Geocoder failed due to: ' + status);
        }
    });
}
function calculateAndDisplayRoute(directionsService, directionsDisplay, origin, destination) {
    directionsService.route({
        origin: {lat: origin.lat, lng: origin.lnt},
        destination: {lat: destination.lat, lng: destination.lnt},
        travelMode: google.maps.TravelMode['DRIVING']
    }, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            console.log('Directions request failed due to ' + status);
        }
    });
}
function erreurPosition(error) {
    var info = "Erreur lors de la géolocalisation : ";
    switch(error.code) {
        case error.TIMEOUT:
            info += "Timeout !";
            break;
        case error.PERMISSION_DENIED:
            info += "Vous n’avez pas donné la permission";
            break;
        case error.POSITION_UNAVAILABLE:
            info += "La position n’a pu être déterminée";
            break;
        case error.UNKNOWN_ERROR:
            info += "Erreur inconnue";
            break;
    }
//        alert('This page use geolocalisation as it\'s a map and there was a problem geolocalisate you. You can delete your preference and try again.');
    var popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');
    var span = document.createElement('span');
    span.appendChild(document.createTextNode('This page use geolocalisation as it\'s a map and there was a problem geolocalisate you. You can delete your preference and refresh your page or choose one of those cities :'));
    var options = [{title: 'Paris', lat: 48.8566140, lnt: 2.3522219 }, {title: 'Marseille',  lat: 43.2964820, lnt: 5.3697800}, {title: 'London', lat: 51.507351, lnt: -0.127758}];
    var select = document.createElement('select');
    for(var i =0; i < options.length; i++) {
        var option = document.createElement('option');
        option.appendChild(document.createTextNode(options[i].title));
        option.setAttribute('value', i);
        select.appendChild(option);
    }
    popupContainer.appendChild(span);
    popupContainer.appendChild(select);
    var div = document.createElement('div');
    var button = document.createElement('span');
    button.classList.add('footer--buttonKey');
    button.appendChild(document.createTextNode('Ok, use this city'));
    E.addHandler(button, 'click', function(){
        var selectValue = select.value;
        maPosition({coords: {latitude: options[selectValue].lat, longitude: options[selectValue].lnt}});
        popupContainer.remove();
    });
    div.appendChild(button);
    popupContainer.appendChild(div);
    document.body.appendChild(popupContainer);
}

function initialize() {
    geocoder = new google.maps.Geocoder();
    if(navigator.geolocation) {
        survId = navigator.geolocation.getCurrentPosition(maPosition,erreurPosition);
    } else {
        alert("Ce navigateur ne supporte pas la géolocalisation");
    }
}

function codeLatLng() {
    var input = document.getElementById('latlng').value;
    var latlngStr = input.split(',', 2);
    var lat = parseFloat(latlngStr[0]);
    var lng = parseFloat(latlngStr[1]);
    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                map.setZoom(11);
                marker = new google.maps.Marker({
                    position: latlng,
                    map: map
                });
                infowindow.setContent(results[1].formatted_address);
                infowindow.open(map, marker);
            } else {
                alert('No results found');
            }
        } else {
            alert('Geocoder failed due to: ' + status);
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);