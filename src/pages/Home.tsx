import useAxiosFetch from '../hooks/useAxiosFetch';
import {baseUrl} from '../data/data';
import CountryCard from '../components/CountryCard';
import CountryList from '../components/CountryList';

interface Props {
  endpoint: string;
}

const Home = ({endpoint}: Props) => {
  const urlFull = baseUrl + endpoint;
  const {data, error, isLoading} = useAxiosFetch(urlFull);

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
