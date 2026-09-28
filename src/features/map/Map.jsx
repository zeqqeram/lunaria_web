import { useEffect, useState } from "react";
import { Circle, MapContainer, Marker, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import UserLocation from "./UserLacation.jsx";
import { latLng } from "leaflet";

const INITIAL_POSITION = [-34.922033, -57.941032];
const ZONE_POSITION = [-34.900870, -57.912936];
const ZONE_RADIUS = 100;

function Map({onZoneStatusChange}) {
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
    const isInsideZone = distanceToZone !== null && distanceToZone <= ZONE_RADIUS;
    useEffect(() => {
        if (!position) {
            return;
        }
        onZoneStatusChange(isInsideZone);
    }, [isInsideZone, onZoneStatusChange, position]);
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
        <p>
            Distancia: {distanceToZone !== null
            ? `${Math.round(distanceToZone)}m`
            : 'Calculando...'}
            <br />
            Dentro de la zona: {isInsideZone ? 'SI' : 'AÚN NO'}
        </p>
    </>
    );
}


export default Map;

