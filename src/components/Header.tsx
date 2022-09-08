import {Moon, Sun} from 'react-feather';
import {Link} from 'react-router-dom';

interface Props {
  theme: string;
  setTheme: (mode: string) => void;
}

const Header = ({theme, setTheme}: Props) => {
  const isDarkMode = theme === 'dark' ? true : false;
  return (
    <header className='bg-white dark:bg-dark-blue dark:text-white justify-between'>
      <Link to='/'>
        <h1>Where in the world?</h1>
      </Link>
      <button
        className='flex gap-2 items-center'
        onClick={() =>
          theme === 'light' ? setTheme('dark') : setTheme('light')
        }
      >
        {/* <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} /> */}
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        <p>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</p>
      </button>
    </header>
  );
};

export default Header;
