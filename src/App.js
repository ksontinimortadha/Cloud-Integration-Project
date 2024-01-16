import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import styled from "styled-components";

// Styled component for the map container
const MapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Functional component representing the main App
const App = () => {
  // Styles for the map
  const mapStyles = {
    height: "80vh",
    width: "90%",
    borderRadius: "10px",
    border: "1px solid white",
  };

  // Default center coordinates for the map
  const defaultCenter = {
    lat: 37.7749,
    lng: 15,
  };

  return (
    <>
      {/* Header with a title and an icon */}
      <h1 style={{ color: "white", textAlign: "center" }}>
        Explore The World <i class="fa-solid fa-earth-africa"></i>
      </h1>

      {/* LoadScript component to load the Google Maps API with the provided API key */}
      <LoadScript googleMapsApiKey="AIzaSyCvGjwsnln_Mp1XPcIkO1eoNuME4W4KXLE">
        {/* Container for the GoogleMap component */}
        <MapContainer>
          {/* GoogleMap component to display the map */}
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
