import { useEffect } from "react";
import { Circle, MapContainer, Marker, TileLayer } from "react-leaflet";
import { latLng } from "leaflet";
import useGeolocation from "../../hooks/useGeolocation.js";
import UserLocation from "./UserLacation.jsx";
import 'leaflet/dist/leaflet.css';

const INITIAL_POSITION = [-34.922033, -57.941032];
const ZONE_POSITION = [-34.922033, -57.941032];
const ZONE_RADIUS = 100;
const DEMO = true; // Temporal para probar geolocalizacion

function Map({onZoneStatusChange}) {
    const {position} = useGeolocation();    
    const distanceToZone = position ? latLng(position).distanceTo(ZONE_POSITION) : null;
    const isInsideZone = DEMO || distanceToZone !== null && distanceToZone <= ZONE_RADIUS;
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

