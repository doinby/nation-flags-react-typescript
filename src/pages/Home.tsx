import useAxiosFetch from '../hooks/useAxiosFetch';
import {baseUrl} from '../baseUrl';

const Home = () => {
  const urlAllCountries = `${baseUrl}/all`;
  const {data, error, isLoading} = useAxiosFetch(urlAllCountries);
  console.log('data:', data);

  return <p>Home</p>;
};

export default Home;
