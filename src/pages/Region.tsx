import {useParams} from 'react-router-dom';
import useAxiosFetch from '../hooks/useAxiosFetch';
import {baseUrl} from '../data/data';
import CountryList from '../components/CountryList';
import CountryCard from '../components/CountryCard';

const Region = () => {
  const {regionId} = useParams();
  const urlRegion = `${baseUrl}/region/${regionId}`;
  const {data, error, isLoading} = useAxiosFetch(urlRegion);
  // console.log('data:', data);

  return (
    <CountryList>
      {data &&
        data.map((countryData, idx) => (
          <CountryCard key={idx} countryData={countryData} />
        ))}
    </CountryList>
  );
};

export default Region;
