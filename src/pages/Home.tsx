import useAxiosFetch from '../hooks/useAxiosFetch';
import {baseUrl} from '../data/data';
import RegionDropdown from '../components/RegionDropdown';
import Header from '../components/Header';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const urlAllCountries = `${baseUrl}/all`;
  const {data, error, isLoading} = useAxiosFetch(urlAllCountries);
  // console.log('data:', data);

  const generateCards =
    data &&
    data.map((country, idx) => {
      // if (idx === 0) {
      //   console.log(country);
      // }

      const {
        name: {common},
        capital,
        population,
        continents,
        flags: {png},
      } = country;

      return (
        <CountryCard
          key={idx}
          flagUrl={png}
          name={common}
          idx={idx}
          capital={capital}
          population={population}
          region={continents}
        />
      );
    });

  return (
    <>
      <Header />
      <main className='flex flex-col items-center'>
        <section id='nav-section' className='flex'>
          <input
            placeholder='Search for country...'
            className='block md:inline-block'
          />
          <RegionDropdown />
        </section>
        <section
          id='countries-section'
          // className='container flex flex-col md:flex-row gap-16 flex-wrap justify-center'
          className='container grid grid-flow-row grid-cols-4 gap-16'
        >
          {data && generateCards}
        </section>
      </main>
    </>
  );
};

export default Home;
