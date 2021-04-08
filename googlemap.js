function loadMap(){
    var uluru = { lat: 28.6304, lng: 77.2177 };
    var map = new google.maps.Map(document.getElementById('map'),
      {
        zoom: 8,
        center: uluru,
      });
    }

