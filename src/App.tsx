import {Route, Routes} from 'react-router-dom';
import CountryLayout from './components/Country/CountryLayout';
import NotFound from './pages/404';
import Country from './pages/Country';
import Home from './pages/Home';
import {useState} from 'react';
import HomeLayout from './components/HomeLayout';
import {baseUrl, regions} from './data/data';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [isDarkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState(selectedRegion.endpoint);

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
              setSearchQuery={setSearchQuery}
            />
          }
        >
          <Route
            index
            element={
              <Home
                url={
                  // If searchQuery is blank, show all countries
                  searchQuery === '/name/'
                    ? baseUrl + '/all'
                    : baseUrl + searchQuery
                }
              />
            }
          />
        </Route>

        {/* Individual Country Page */}
        <Route
          path='country'
          element={
            <CountryLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
          }
        >
          <Route index element={<NotFound />} />
          <Route path=':countryId' element={<Country />} />
        </Route>

        {/* 404 Page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
