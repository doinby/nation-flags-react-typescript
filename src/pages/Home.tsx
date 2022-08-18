import useAxiosFetch from '../hooks/useAxiosFetch';
import {baseUrl} from '../data/data';
import RegionDropdown from '../components/RegionDropdown';
import Header from '../components/Header';

const Home = () => {
  const urlAllCountries = `${baseUrl}/all`;
  const {data, error, isLoading} = useAxiosFetch(urlAllCountries);
  console.log('data:', data);

  return (
    <>
      <Header />
      <main>
        <section className='flex'>
          <input
            placeholder='Search for country...'
            className='block md:inline-block'
          />
          <RegionDropdown />
        </section>
      </main>
    </>
  );
};

export default Home;
