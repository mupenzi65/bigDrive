import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectDestination, selectOrgin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
const Map = () => {
  const orgin = useSelector(selectOrgin);
  const destination = useSelector(selectDestination);
  const mapRef=useRef()

 useEffect(()=>{
  if(!orgin || !destination) return

  // zoom to fit markers

  mapRef.current.fitToSuppliedMarkers(['origin','destination'],{
    edgePadding:{top:80,right:50,bottom:50,left:50},
  })

 },[orgin,destination])

//  useEffect(() => {
//   if (!orgin || !destination || !GOOGLE_MAPS_APIKEY) return;

//   const getTravelTime = async () => {
//     const url = `https://maps.googleapis.com/maps/api/distancematrix/json
//       ?destinations=${destination.description}
//       &origins=${orgin.description}
//       &units=imperial
//       &key=${GOOGLE_MAPS_APIKEY}`;

//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching travel time:', error);
//     }
//   };

//   getTravelTime();
// }, [orgin, destination, GOOGLE_MAPS_APIKEY]);


  return (
    <MapView
    ref={mapRef}
      className="flex-1"
      mapType="mutedStandard"
      initialRegion={{
        latitude: orgin.location.lat,
        longitude: orgin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {orgin && destination && (
        <MapViewDirections
          origin={orgin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="red"
        />
      )}
      {orgin?.location && (
        <Marker
          coordinate={{
            latitude: orgin.location.lat,
            longitude: orgin.location.lng,
          }}
          title="Origin"
          description={orgin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;
