import useAxiosFetch from '../hooks/useAxiosFetch';
import {baseUrl} from '../data/data';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const urlAllCountries = `${baseUrl}/all`;
  const {data, error, isLoading} = useAxiosFetch(urlAllCountries);

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
    <section
      id='countries-section'
      // className='container flex flex-col md:flex-row gap-16 flex-wrap justify-center'
      className='container grid grid-flow-row grid-cols-[repeat(auto-fill,_minmax(264px,_auto))] gap-16 justify-items-center'
    >
      {data && generateCards}
    </section>
  );
};

export default Home;
