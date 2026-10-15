import { useEffect } from 'react';
import { useMap, Circle, MapContainer, Marker, TileLayer } from 'react-leaflet';
import { latLng } from 'leaflet';
import useGeolocation from '../../hooks/useGeolocation.js';
import UserLocation from './UserLacation.jsx';
import ZoneOverlay from './ZoneOverlay.jsx';
import styles from './Map.module.css';
import 'leaflet/dist/leaflet.css';

const INITIAL_POSITION = [-34.922033, -57.941032];
const INITIAL_ZOOM = 13;
const ZONE_ZOOM = 16;

function ZoneFocus({ zone }) {
    const map = useMap();

    useEffect(() => {
        if (!zone) return;

        map.flyTo(zone.position, ZONE_ZOOM);
    }, [map, zone]);

    return null;
}

function Map({
    activeZone = null,
    onZoneStatusChange,
    onEnterExperience,
}) {
    const { position } = useGeolocation();

    const distanceToZone =
        position && activeZone
            ? latLng(position).distanceTo(activeZone.position)
            : null;

    const isInsideZone =
        activeZone && distanceToZone !== null
            ? distanceToZone <= activeZone.radius
            : false;

    const showOverlay = Boolean(activeZone) && position && isInsideZone;

    useEffect(() => {
        if (!position || !activeZone || !onZoneStatusChange) return;

        onZoneStatusChange(isInsideZone);
    }, [isInsideZone, onZoneStatusChange, position, activeZone]);

    return (
        <>
            <div className={styles.mapWrapper}>
                <MapContainer
                    center={INITIAL_POSITION}
                    zoom={INITIAL_ZOOM}
                    scrollWheelZoom={false}
                    style={{ height: '400px', width: '100%' }}
                >
                    <TileLayer
                        attribution="&copy;OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {activeZone && (
                        <Circle
                            center={activeZone.position}
                            radius={activeZone.radius}
                        />
                    )}

                    {position && <Marker position={position} />}

                    <UserLocation position={activeZone ? null : position} />
                    <ZoneFocus zone={activeZone} />
                </MapContainer>

                {showOverlay && (
                    <ZoneOverlay
                        zone={activeZone}
                        onEnter={onEnterExperience}
                    />
                )}
            </div>

            <p>
                {!activeZone
                    ? 'Elegí una medalla para ver su zona.'
                    : position
                      ? isInsideZone
                          ? 'Estás dentro de la zona del tesoro, buscalo con tu cámara'
                          : 'Estás fuera de la zona del tesoro, acercate más'
                      : 'Buscando tu ubicación...'}
            </p>

            {activeZone && (
                <p>
                    Distancia:{' '}
                    {distanceToZone !== null
                        ? `${Math.round(distanceToZone)}m`
                        : 'Calculando...'}
                    <br />
                    Dentro de la zona: {isInsideZone ? 'SI' : 'AÚN NO'}
                </p>
            )}
        </>
    );
}

export default Map;