let marker, map

function initMap() {
  const posicion = {
    lat: -27.59667,
    lng: -48.54917,
  }
  const posicion2 = {
    lat: 39.4561165,
    lng: -0.3545661,
  }
  const posicion3 = {
    lat: -34.61315,
    lng: -58.37723,
  }

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  })

  marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Posición Inicial",
  })

  marker2 = new google.maps.Marker({
    position: posicion2,
    map,
    title: "Posición 2",
  })

  marker3 = new google.maps.Marker({
    position: posicion3,
    map,
    title: "Posición 3",
  })
  geoPosiciona()
}

function geoPosiciona() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation
    const options = { timeout: 60000 }
    const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
  } else {
    alert("Tu navegador no admite geolocalización")
  }
}

function centraMapa(position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  }
  marker.setPosition(nuevaPos)
  map.setCenter(nuevaPos)
}

function onError(error) {
  console.log("Se ha producido un error")
  console.error(error)
}
