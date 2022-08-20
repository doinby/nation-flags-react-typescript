import useAxiosFetch from '../hooks/useAxiosFetch';
import {baseUrl} from '../data/data';
import CountryCard from '../components/CountryCard';
import CountryList from '../components/CountryList';

interface Props {
  url: string;
}

const Home = ({url}: Props) => {
  console.log('url:', url);
  const {data, error, isLoading} = useAxiosFetch(url);

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
