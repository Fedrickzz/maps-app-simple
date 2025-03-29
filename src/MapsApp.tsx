import { MapProvider, PlacesProvider } from './context';
import { Homescreen } from './screens';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <Homescreen />
      </MapProvider>
    </PlacesProvider>
  );
};
