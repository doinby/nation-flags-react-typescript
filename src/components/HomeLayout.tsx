import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-regular-svg-icons';
import {ReactNode} from 'react';
import SearchBar from '../components/SearchBar';
import RegionDropdown from '../components/RegionDropdown';

interface Props {
  children?: ReactNode;
  selectedRegion: string;
  setSelectedRegion: any;
}

const HomeLayout = ({children, selectedRegion, setSelectedRegion}: Props) => {
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
        {children}
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default HomeLayout;
