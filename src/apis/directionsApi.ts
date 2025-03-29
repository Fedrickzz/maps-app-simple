import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    language: 'es',
    overview: 'simplified',
    steps: true,
    access_token:
      'pk.eyJ1IjoiZmVkcmljayIsImEiOiJjbTgzaG15c2cwNmlxMm9yNDZ2am5rY2RkIn0.cuQcnq7WrzR2i2azKhNF_w',
  },
});

export default directionsApi;
