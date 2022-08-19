import useAxiosFetch from '../hooks/useAxiosFetch';
import {baseUrl} from '../data/data';
import CountryCard from '../components/CountryCard';
import CountryList from '../components/CountryList';

const Home = () => {
  const urlAllCountries = `${baseUrl}/all`;
  const {data, error, isLoading} = useAxiosFetch(urlAllCountries);

  return (
    <CountryList>
      {data &&
        data.map((countryData, idx) => (
          <CountryCard key={idx} countryData={countryData} />
        ))}
    </CountryList>
  );
};

export default Home;
