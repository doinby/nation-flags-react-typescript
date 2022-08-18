import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  return (
    <header className='flex justify-between shadow-md px-4 py-8'>
      <h1>Where in the world?</h1>
      <section className='flex'>
        <FontAwesomeIcon icon={faMoon} />
        <FontAwesomeIcon icon={faSun} />
        <p>Dark Mode</p>
      </section>
    </header>
  );
};

export default Header;
