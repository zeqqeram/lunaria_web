import { useEffect, useState } from "react";
import { Circle, MapContainer, Marker, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import UserLocation from "./UserLacation.jsx";
import { latLng } from "leaflet";

const INITIAL_POSITION = [-34.922033, -57.941032];
const ZONE_POSITION = [-34.922033, -57.941032];
const ZONE_RADIUS = 100;

function Map() {
    const [position, setPosition] = useState(null);
    
    useEffect(() => {
        if (!navigator.geolocation) {
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (location) => {
                setPosition([
                    location.coords.latitude,
                    location.coords.longitude,
                ]);
            },
        );
    }, [] );

    const distanceToZone = position ? latLng(position).distanceTo(ZONE_POSITION) : null;
    const isInsideZone = distanceToZone !== null && distanceToZone <= ZONE_POSITION;

    return (
    <>
        <MapContainer 
        center={INITIAL_POSITION} zoom={13} scrollWheelZoom={false} style={{height: '400px', width: '100%'}}>
            <TileLayer attribution='&copy;OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {position && <Marker position={position} />}
            <Circle center={ZONE_POSITION} radius={ZONE_RADIUS} />
            <UserLocation position={position} />
        </MapContainer>
        <p>
            {position 
                ? isInsideZone 
                    ? 'Estas dentro de la zona del tesoro, buscalo con tu cámara' 
                    : 'Estas fuera de la zona del tesoro, acercate más'
                : 'Buscando tu ubicación...'  
            }
        </p>
    </>
    );
}
   

export default Map;

