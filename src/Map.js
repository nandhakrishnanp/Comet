
import React from 'react'
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import L, { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css'

const Map = ({evChargingStations}) => {
    const customIconUrl ="https://static.vecteezy.com/system/resources/previews/009/589/758/non_2x/location-location-pin-location-icon-transparent-free-png.png"
  const customIcon = new L.Icon({
    iconUrl: customIconUrl,
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [0, -64],
  });
  return (
    <MapContainer center={[10.9956, 77.2852]} zoom={10} scrollWheelZoom={true}  style={{ position: 'relative', top: '20px', left: 0, width: '90%', height: '500px', zIndex: 0 , border:"5px solid #A2FF86" ,borderRadius:"15px", boxShadow:"2px 2px #000" ,marginLeft:'10px' }}>
    <TileLayer
   
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />


     {evChargingStations.map((station, index) => (
        <Marker
          key={index}
          icon={customIcon}
          position={[station.lat, station.lng]}
        >
          <Popup   >
            <div className='nomar'>
              <h5 className='pop text-dark'>{station.name}</h5>
              <p>{station.address}</p>
              {/* Add more information as needed */}
            </div>
          </Popup>
        </Marker>
      ))}
  </MapContainer>
  )
}

export default Map