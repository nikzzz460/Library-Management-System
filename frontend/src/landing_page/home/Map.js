import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
    // Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1Ijoibmlremplbm4iLCJhIjoiY2x5bHRjOTBhMGZybTJpczYwcHlwdTV1MiJ9.TqoDPeWvLbEPqu3cXJoQHQ';

    // Initialize the map only after rendering the component
    React.useEffect(() => {
        // Map initialization
        const map = new mapboxgl.Map({
            container: 'map-container', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // map style
            center: [73.8162, 18.4861], // coordinates of Cummins College [lng, lat]
            zoom: 15, // starting zoom level
        });

        // Create a popup with smaller font size
        const popup = new mapboxgl.Popup({ offset: 25, closeOnClick: false })
            .setLngLat([73.8162, 18.4861])
            .setHTML(
                `<div style="font-size: 12px;">
                    <strong>Cummins College of Engineering</strong><br/>
                    Karve Nagar, Pune
                </div>`
            )
            .addTo(map);

        // Add a marker with the popup already visible
        new mapboxgl.Marker()
            .setLngLat([73.8162, 18.4861])
            .setPopup(popup)
            .addTo(map);

        // Cleanup on unmount
        return () => map.remove();
    }, []);

    return (
        <div>
            <div
                id="map-container"
                style={{ width: '80%', height: '200px', margin: '20px auto', marginTop: '50px' }} // Added marginTop for space
            ></div>
        </div>
    );
}

export default Map;
