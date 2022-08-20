import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-regular-svg-icons';

interface Props {
  isDarkMode: boolean;
  setDarkMode: any;
}

const Header = ({isDarkMode, setDarkMode}: Props) => {
  return (
    <header className='flex justify-between shadow-md px-4 py-8'>
      <h1>Where in the world?</h1>
      <button
        className='flex gap-2 items-center'
        onClick={() => setDarkMode((prev: boolean) => !prev)}
      >
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        <p>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</p>
      </button>
    </header>
  );
};

export default Header;
