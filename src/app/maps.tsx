'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function GoogleMapWithInlineScript() {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (window.google && !map) {
      const mapInstance = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: 17.385044, lng: 78.486671 }, // Hyderabad
        zoom: 12,
      });

      new google.maps.Marker({
        position: { lat: 17.385044, lng: 78.486671 },
        map: mapInstance,
        title: 'Hyderabad',
      });

      setMap(mapInstance);
    }
  }, [map]);

  return (
    <>
      {/* Directly load Google Maps with your API Key */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAvhZMnegvG40g9V9cZEx7K3wRkqvrt89s`}
        strategy="afterInteractive"
        onLoad={() => console.log('Google Maps loaded')}
      />

      {/* Map Container */}
      <div id="map" style={{ width: '100%', height: '400px' }} />
    </>
  );
}
