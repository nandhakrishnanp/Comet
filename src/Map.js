import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
const Map = ({ evChargingStations, mylocation }) => {
  const customIconUrl = "https://static.vecteezy.com/system/resources/previews/009/589/758/non_2x/location-location-pin-location-icon-transparent-free-png.png";
  const customIcon = new L.Icon({
    iconUrl: customIconUrl,
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [0, -64],
  });

  const customIcon2 = new L.Icon({
    iconUrl: "https://png.pngtree.com/png-vector/20230131/ourmid/pngtree-point-maps-icon-power-outlet-location-of-electric-vehicle-charging-station-png-image_6578453.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
 
const [routeControl, setRouteControl] = useState(null);

  const [destination, setDestination] = useState(null);
  const [nearestMarker, setNearestMarker] = useState(null);
  const [stationsAlongRoute, setStationsAlongRoute] = useState([]);
  const map = useMapEvents({
    click: (e) => {
      // Clear the route and nearest marker when clicking on the map
      setDestination(null);
      setNearestMarker(null);
    },
  });
  useEffect(() => {
    if (mylocation && evChargingStations.length > 0) {
      // Calculate distances to all markers
      const distances = evChargingStations.map((station) => ({
        station,
        distance: L.latLng(mylocation.latitude, mylocation.longitude).distanceTo(L.latLng(station.lat, station.lng)),
      }));
  
      // Find the nearest marker
      const nearest = distances.reduce((min, d) => (d.distance < min.distance ? d : min), distances[0]);
  
      // Set the nearest marker
      setNearestMarker(nearest.station);
  
      // Update the waypoints of the existing route control
      if (routeControl) {
        routeControl.getPlan().setWaypoints([
          L.latLng(mylocation.latitude, mylocation.longitude),
          L.latLng(nearest.station.lat, nearest.station.lng),
        ]);
      } else {
        // Create the route control if it doesn't exist
        const newRouteControl = L.Routing.control({
          waypoints: [
            L.latLng(mylocation.latitude, mylocation.longitude),
            L.latLng(nearest.station.lat, nearest.station.lng),
          ],
           createMarker: function() { return null; }
        });
  
        // Add the route control to the map
        newRouteControl.addTo(map);
        setRouteControl(newRouteControl);
      }
    }
  }, [mylocation, evChargingStations, map, routeControl]);


   const addStation =()=>{
    newRouteControl.on('routeselected', (e) => {
      // Extract the waypoints from the selected route
      const routeWaypoints = e.route.waypoints;

      // Find charging stations along the route
      const stations = evChargingStations.filter(station => {
        const stationLatLng = L.latLng(station.lat, station.lng);
        return routeWaypoints.some(waypoint => waypoint.equals(stationLatLng));
      });

      // Set the found stations in the state
      setStationsAlongRoute(stations);
   }
 ) }
    
  return (
    <div>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {evChargingStations.map((station, index) => (
        <Marker
          key={index}
          icon={customIcon2}
          position={[station.lat, station.lng]}
          eventHandlers={{
            click: () => setDestination({ lat: station.lat, lng: station.lng }),
          }}
        >
          <Popup>
            <div className='nomar'>
              <h5 className='pop text-dark'>{station.name}</h5>
              <p>{station.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      {mylocation !== undefined && mylocation.latitude > 0 ? (
        <Marker icon={customIcon} position={[mylocation.latitude, mylocation.longitude]}>
          <Popup>
            <h5>Current Location</h5>
          </Popup>
        </Marker>
      ) : null}

      {nearestMarker ? (
        <Marker icon={customIcon} position={[nearestMarker.lat, nearestMarker.lng]}>
          <Popup>
            <h5>Nearest Station</h5>
            <p>{nearestMarker.name}</p>
          </Popup>
        </Marker>
      ) : null}
    </div>
  );
}

export default Map;
