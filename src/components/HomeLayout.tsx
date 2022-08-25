import SearchBar from '../components/SearchBar';
import RegionDropdown from '../components/RegionDropdown';
import {Outlet} from 'react-router-dom';
import Header from './Header';

interface Props {
  selectedRegion: {
    name: string;
  };
  setSelectedRegion: any;
  theme: string;
  setTheme: any;
  setSearchQuery: any;
}

const HomeLayout = ({
  selectedRegion,
  setSelectedRegion,
  theme,
  setTheme,
  setSearchQuery,
}: Props) => {
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main className='flex flex-col items-center py-6 gap-12 mx-6 md:mx-0'>
        <section
          id='nav-section'
          className='container flex flex-col md:flex-row md:justify-between w-full gap-6'
        >
          <SearchBar setSearchQuery={setSearchQuery} />
          <RegionDropdown
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            setSearchQuery={setSearchQuery}
          />
        </section>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default HomeLayout;
