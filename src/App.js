import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const mapStyles = {
    height: "80vh",
    width: "90%",
    borderRadius: "10px",
    border: "1px solid white",
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: 15,
  };

  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Explore The World <i class="fa-solid fa-earth-africa"></i>
      </h1>
      <LoadScript googleMapsApiKey="AIzaSyCvGjwsnln_Mp1XPcIkO1eoNuME4W4KXLE">
        <MapContainer>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={5}
            center={defaultCenter}
          />
        </MapContainer>
      </LoadScript>
    </>
  );
};

export default App;
