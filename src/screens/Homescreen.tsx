import { BtnMyLocation, MapView, ReactLogo, SearchBar } from '../components';

export const Homescreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <SearchBar />
    </div>
  );
};
