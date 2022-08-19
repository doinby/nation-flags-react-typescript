import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-regular-svg-icons';
import SearchBar from '../components/SearchBar';
import RegionDropdown from '../components/RegionDropdown';
import {Outlet} from 'react-router-dom';

interface Props {
  selectedRegion: string;
  setSelectedRegion: (val: string) => void;
}

const HomeLayout = ({selectedRegion, setSelectedRegion}: Props) => {
  return (
    <>
      <header className='flex justify-between shadow-md px-4 py-8'>
        <h1>Where in the world?</h1>
        <section className='flex'>
          <FontAwesomeIcon icon={faMoon} />
          <FontAwesomeIcon icon={faSun} />
          <p>Dark Mode</p>
        </section>
      </header>
      <main className='flex flex-col items-center'>
        <section id='nav-section' className='flex'>
          <SearchBar />
          <RegionDropdown
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </section>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default HomeLayout;
