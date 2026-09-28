import { useEffect, useState } from "react";

function useGeolocation() {
    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);
    const isGeolocatioAvailable = 'geolocation' in navigator;

    useEffect(() => {
        if (!isGeolocatioAvailable) {
            return;
        }

        const watchId = navigator.geolocation.watchPosition((location) => {
            setPosition([
                location.coords.latitude,
                location.coords.longitude,
            ]);
        }, () => {
            setError('No se pudo obtener tu ubicación');
        }, 
    );
    return () => {
        navigator.geolocation.clearWatch(watchId);
    };
    }, [isGeolocatioAvailable]);

    return {
        position, 
        error,
        isGeolocatioAvailable,
    };
}

export default useGeolocation;