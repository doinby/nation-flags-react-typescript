import SearchBar from '../components/SearchBar';
import RegionDropdown from '../components/RegionDropdown';
import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface Props {
  selectedRegion: {
    name: string;
  };
  setSelectedRegion: any;
  theme: string;
  setTheme: (mode: string) => void;
  setSearchQuery: (query: string) => void;
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
      <main className='flex flex-col items-center py-6 gap-12 mx-6'>
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
      <Footer theme={theme} />
    </>
  );
};

export default HomeLayout;
