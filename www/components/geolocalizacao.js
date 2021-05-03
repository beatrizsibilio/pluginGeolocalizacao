// This is a JavaScript file

function mostraMapa(lat, long){
  L.mapquest.key = 'KGAQR7T5RkiIzLsrQlq6qxC2HXsTAa7m';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 16
        });

        map.addControl(L.mapquest.control());

        L.marker([lat, long], {
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).addTo(map);
}

$(document).on("click","#local", function(){
  var onSuccess = function(position) {
        mostraMapa(position.coords.latitude, position.coords.longitude);
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});