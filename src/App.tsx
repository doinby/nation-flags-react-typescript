import {Route, Routes} from 'react-router-dom';
import CountryLayout from './components/CountryLayout';
import NotFound from './pages/404';
import Country from './pages/Country';
import Home from './pages/Home';
import {useState} from 'react';
import HomeLayout from './components/HomeLayout';
import {regions} from './data/data';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <>
      <Routes>
        {/* Index Page */}
        <Route
          path='/'
          element={
            <HomeLayout
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              isDarkMode={isDarkMode}
              setDarkMode={setDarkMode}
            />
          }
        >
          <Route index element={<Home endpoint={selectedRegion.endpoint} />} />
        </Route>

        {/* Individual Country Page */}
        <Route path='country' element={<CountryLayout />}>
          <Route index element={<NotFound />} />
          <Route path=':countryId' element={<Country />} />
        </Route>

        {/* Error Page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
