import {Moon, Sun} from 'react-feather';
import {Link} from 'react-router-dom';

interface Props {
  isDarkMode: boolean;
  setDarkMode: any;
}

const Header = ({isDarkMode, setDarkMode}: Props) => {
  return (
    <header>
      <Link to='/'>
        <h1>Where in the world?</h1>
      </Link>
      <button
        className='flex gap-2 items-center'
        onClick={() => setDarkMode((prev: boolean) => !prev)}
      >
        {/* <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} /> */}
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        <p>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</p>
      </button>
    </header>
  );
};

export default Header;
