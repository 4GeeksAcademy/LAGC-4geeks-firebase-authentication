import React, { useState } from 'react';
import axios from "axios";

console.log('Entering geo function');
const apiKey = `${process.env.GOOGLE_PLACES_API_KEY}`;

console.log(apiKey);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=`;
console.log(geocodeUrl);

export default function AddressToLatLngConverter () {
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);


  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const convertToLatLng = () => {
    if (address.trim() !== '') {
      axios
        .get(geocodeUrl + encodeURIComponent(address))
        .then((response) => {
          const result = response.data.results[0];
          if (result) {
            setLatitude(result.geometry.location.lat);
            setLongitude(result.geometry.location.lng);
          } else {
            // Handle address not found error
            console.log('Address not found.');
          }
        })
        .catch((error) => {
          // Handle API call error
          console.log('Error fetching data:', error);
        });
    }
  };

  return (
    <div className='form-group'>
      <input type="text" value={address} onChange={handleAddressChange} />
      <button onClick={convertToLatLng}>Convert</button>
      {latitude && longitude && (
        <div>
          Latitude: {latitude}, Longitude: {longitude}
        </div>
      )}
    </div>
  );
};
