import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = ({ gKey }) => {
  const gmap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: gKey,
      version: "weekly",
    });

    let map;
    let marker;

    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(gmap.current, {
        center: {
          lat: 39.5582834811288,
          lng: -119.03217153636068,
        },
        zoom: 15,
      });
      marker = new google.maps.Marker({
        position: {
          lat: 39.5582834811288,
          lng: -119.03217153636068,
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
