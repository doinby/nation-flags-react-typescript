import useAxiosFetch from '../hooks/useAxiosFetch';
import {baseUrl} from '../data/data';
import RegionDropdown from '../components/RegionDropdown';
import HomeLayout from '../components/HomeLayout';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';

interface Props {
  selectedRegion: string;
  setSelectedRegion: any;
}

const Home = ({selectedRegion, setSelectedRegion}: Props) => {
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
      <HomeLayout
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      >
        <section
          id='countries-section'
          // className='container flex flex-col md:flex-row gap-16 flex-wrap justify-center'
          className='container grid grid-flow-row grid-cols-4 gap-16'
        >
          {data && generateCards}
        </section>
      </HomeLayout>
    </>
  );
};

export default Home;
