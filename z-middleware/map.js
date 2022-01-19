import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = ({ gKey, gps }) => {
  const gmap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_BOHO_GMAPS_KEY,
      version: "weekly",
    });

    let map;
    let marker;
    let geocoder;

    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(gmap.current, {
        center: {
          lat: +gps[0],
          lng: +gps[1],
        },
        zoom: 15,
      });
      marker = new google.maps.Marker({
        position: {
          lat: +gps[0],
          lng: +gps[1],
        },
        map,
        title: "Shop Here",
      });
      marker.setMap(map);
    });
  }, [gKey]);

  return <div id="map" ref={gmap}></div>;
};

export default Map;
