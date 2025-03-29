import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/search/geocode/v6/forward?q=',
  params: {
    limit: 5,
    language: 'es',
    access_token:
      'pk.eyJ1IjoiZmVkcmljayIsImEiOiJjbTgzaG15c2cwNmlxMm9yNDZ2am5rY2RkIn0.cuQcnq7WrzR2i2azKhNF_w',
  },
});

export default searchApi;
