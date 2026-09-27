import { useEffect } from "react";
import { useMap } from "react-leaflet";

function UserLocation({position}) {
    const map = useMap();

    useEffect(() => {
        if (!position) {
            return;
        }
    map.setView(position, 15);
    }, [map, position]);

    return null;
}

export default UserLocation;