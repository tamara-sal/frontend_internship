import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Box from '@mui/material/Box';

const cargos = [
  { id: 1, name: 'Cargo 1', lat: 33.8886, lng: 35.4955 },
  { id: 2, name: 'Cargo 2', lat: 33.8938, lng: 35.5018 },
];

export default function CargoMap() {
  return (
    <Box sx={{ height: '80vh', width: '100%' }}>
      <MapContainer center={[33.8886, 35.4955]} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {cargos.map((cargo) => (
          <Marker key={cargo.id} position={[cargo.lat, cargo.lng]}>
            <Popup>{cargo.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
}
