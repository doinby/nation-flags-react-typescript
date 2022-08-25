import {Route, Routes} from 'react-router-dom';
import CountryLayout from './components/Country/CountryLayout';
import NotFound from './pages/404';
import Country from './pages/Country';
import Home from './pages/Home';
import {useState, useEffect} from 'react';
import HomeLayout from './components/HomeLayout';
import {baseUrl, regions} from './data/data';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [searchQuery, setSearchQuery] = useState(selectedRegion.endpoint);

  const [theme, setTheme] = useState(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return 'dark';
    } else {
      return 'light';
    }
  });

  useEffect(() => {
    const rootElement = document.getElementsByTagName('html')[0];
    if (theme === 'light') {
      rootElement.classList.remove('dark');
    } else {
      rootElement.classList.add('dark');
    }
    localStorage.theme = theme;
  }, [theme]);

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
              setSearchQuery={setSearchQuery}
              theme={theme}
              setTheme={setTheme}
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
          element={<CountryLayout theme={theme} setTheme={setTheme} />}
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
