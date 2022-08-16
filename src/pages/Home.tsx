import useAxiosFetch from '../hooks/useAxiosFetch';
import {baseUrl} from '../baseUrl';
import HomeLayout from '../components/HomeLayout';

const Home = () => {
  const urlAllCountries = `${baseUrl}/all`;
  const {data, error, isLoading} = useAxiosFetch(urlAllCountries);
  console.log('data:', data);

  return (
    <>
      <HomeLayout>
        <section>
          <input placeholder='Search for a country...' />
        </section>
      </HomeLayout>
    </>
  );
};

export default Home;
