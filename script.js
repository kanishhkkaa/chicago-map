function initMap() {
    // Create the map centered around Chicago
    const chicago = { lat: 41.8781, lng: -87.6298 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: chicago
    });

    // Example dealership data (replace with real data)
    const dealerships = [
        { name: "Honda of Downtown Chicago", lat: 41.8876, lng: -87.6301 },
        { name: "McGrath City Honda", lat: 41.9292, lng: -87.7729 }
    ];

    // Add markers to the map for each dealership
    dealerships.forEach(dealer => {
        const marker = new google.maps.Marker({
            position: { lat: dealer.lat, lng: dealer.lng },
            map: map,
            title: dealer.name
        });

        // Add dealership to the list
        const list = document.getElementById('dealerships');
        const listItem = document.createElement('li');
        listItem.textContent = dealer.name;
        list.appendChild(listItem);
    });
}

// Load the Google Maps API script dynamically
function loadScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCpEt4-hvsOdxURoPI8Gd3yKnYvg1w0oXk&callback=initMap`;
    script.defer = true;
    document.head.appendChild(script);
}

window.onload = loadScript;
fetch('/api/dealerships')
    .then(response => response.json())
    .then(data => {
        data.forEach(dealer => {
            // Add dealer marker and list item here
        });
    });

