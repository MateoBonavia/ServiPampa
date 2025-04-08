'use client';
import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

// function Maps() {
//   let loc = 'Morrison';
//   const changeLoc = (location: string) => {
//     loc = location;
//     console.log(loc);
//   };

//   const mapRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const initMap = async () => {
//       const loader = new Loader({
//         apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
//         version: 'quarterly',
//         libraries: ['places'],
//       });
//       const { Map } = await loader.importLibrary('maps');

//       const locationMorrison = {
//         lat: -32.58491647271772,
//         lng: -62.82959248843925,
//       };

//       const locationEscalante = {
//         lat: -33.175498032841745,
//         lng: -62.779081365295546,
//       };

//       const options: google.maps.MapOptions = {
//         center: loc === 'Morrison' ? locationMorrison : locationEscalante,
//         zoom: 12,
//         mapId: 'Map',
//       };

//       const map = new Map(mapRef.current! as HTMLElement, options);

//       const { AdvancedMarkerElement } = (await loader.importLibrary(
//         'marker'
//       )) as google.maps.MarkerLibrary;

//       new AdvancedMarkerElement({
//         position: loc === 'Morrison' ? locationMorrison : locationEscalante,
//         map: map,
//       });
//     };

//     initMap();
//   }, []);

//   return (
//     <div>
//       <div className="text-white mt-2 flex gap-4">
//         <button
//           className="bg-[#00001C] p-2 rounded-md"
//           onClick={() => changeLoc('Morrison')}
//         >
//           Morrison
//         </button>
//         <button
//           className="bg-[#00001C] p-2 rounded-md"
//           onClick={() => changeLoc('Escalante')}
//         >
//           Escalante
//         </button>
//       </div>
//       <div ref={mapRef} className="w-full h-screen" />
//     </div>
//   );
// }

// export default Maps;

function Maps() {
  const locationMorrison = {
    lat: -32.58491647271772,
    lng: -62.82959248843925,
  };

  const locationEscalante = {
    lat: -33.175498032841745,
    lng: -62.779081365295546,
  };

  const [location, setLocation] = useState(locationMorrison);

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      // We call the loader to pass de apiKey and the version
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'quarterly',
      });

      // Import the Map library
      const { Map } = await loader.importLibrary('maps');
      // Import the Marker
      const { AdvancedMarkerElement } = (await loader.importLibrary(
        'marker'
      )) as google.maps.MarkerLibrary;

      // Position of the map
      const position = {
        lat: location.lat,
        lng: location.lng,
      };

      // Map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        mapId: 'MY_NEXTJS_MAPID',
      };

      // Setup the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // Create the marker
      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: 'Estación de servicio ServiPampa',
      });
    };

    initMap();
  }, [location]);

  return (
    <div className="flex flex-col gap-2">
      <div className="h-100 w-full rounded-lg" ref={mapRef}></div>
      {/* Buttons to change the location */}
      <div className="text-white flex gap-4">
        <button
          className="bg-[#00001C] p-2 rounded-md"
          onClick={() => setLocation(locationMorrison)}
        >
          Morrison
        </button>
        <button
          className="bg-[#00001C] p-2 rounded-md"
          onClick={() => setLocation(locationEscalante)}
        >
          Escalante
        </button>
      </div>
    </div>
  );
}

export default Maps;
