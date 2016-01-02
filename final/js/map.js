var geocoder = new google.maps.Geocoder();

if(navigator.geolocation) {
    survId = navigator.geolocation.getCurrentPosition(maPosition,erreurPosition);
} else {
    alert("This browser does not support geolocalisation");
}

function maPosition(pos){
    var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if(results[1]) {
                var location = document.getElementById('gmap-city');
                location.innerHTML = results[1].formatted_address;
            }
        } else {
            alert('Geocoder failed due to: ' + status);
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
}