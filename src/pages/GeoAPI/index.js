import React, { useEffect, useState } from "react";

export default function GeoAPI() {
  const [location, setLocation] = useState({});
  useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(handlePosition);
    return () => navigator.geolocation.clearWtach(watchID);
  }, []);
  function handlePosition(coord) {
    const { latitude, longitude } = coord.coords;

    setLocation({ latitude, longitude });
  }
  return (
    <>
      <p>latitude: {location.latitude}</p>
      <p>longitude: {location.longitude}</p>
    </>
  );
}
