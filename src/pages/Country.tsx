import {useParams} from 'react-router-dom';
import {baseUrl} from '../data/data';
import useAxiosFetch from '../hooks/useAxiosFetch';

const Country = () => {
  const {countryId} = useParams();
  const countryUrl = `${baseUrl}/alpha/${countryId}`;
  const {data, error, isLoading} = useAxiosFetch(countryUrl);
  console.log('data:', data);

  return (
    <>
      <p>Country {countryId}</p>
    </>
  );
};

export default Country;
