import {Route, Routes} from 'react-router-dom';
import CountryLayout from './components/CountryLayout';
import RegionLayout from './components/RegionLayout';
import NotFound from './pages/404';
import Country from './pages/Country';
import Home from './pages/Home';
import Region from './pages/Region';
import {regions} from './data/data';
import {useState} from 'react';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
            />
          }
        />
        <Route path='region' element={<RegionLayout />}>
          <Route index element={<NotFound />} />
          <Route path=':regionId' element={<Region />} />
        </Route>
        <Route path='country' element={<CountryLayout />}>
          <Route index element={<NotFound />} />
          <Route path=':countryId' element={<Country />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
