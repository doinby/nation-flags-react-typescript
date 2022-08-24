/* eslint-disable @typescript-eslint/no-unused-vars */
import useAxiosFetch from '../hooks/useAxiosFetch';
import CountryCards from '../components/CountryCards';
import Loading from '../components/Loading';

interface Props {
  url: string;
}

const Home = ({url}: Props) => {
  const {data, error, isLoading} = useAxiosFetch(url);
  console.log('error:', error);

  return (
    <>{isLoading ? <Loading /> : <CountryCards data={data} error={error} />}</>
  );
};

export default Home;
