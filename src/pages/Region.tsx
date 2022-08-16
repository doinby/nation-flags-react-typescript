import {useParams} from 'react-router-dom';
import useAxiosFetch from '../hooks/useAxiosFetch';
import {baseUrl} from '../baseUrl';

const Region = () => {
  const {regionId} = useParams();
  const urlRegion = `${baseUrl}/region/${regionId}`;
  const {data, error, isLoading} = useAxiosFetch(urlRegion);
  console.log('data:', data);

  return <p>Individual Region {regionId}</p>;
};

export default Region;
