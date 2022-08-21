/* eslint-disable @typescript-eslint/no-unused-vars */
import useAxiosFetch from '../hooks/useAxiosFetch';
import CountryCard from '../components/CountryCard';
import CountryList from '../components/CountryList';

interface Props {
  url: string;
}

const Home = ({url}: Props) => {
  const {data, error, isLoading} = useAxiosFetch(url);

  return (
    <CountryList>
      {data &&
        data.map((countryData, idx) => {
          // if (idx === 0) {
          //   console.log(countryData);
          // }
          return <CountryCard key={idx} countryData={countryData} />;
        })}
    </CountryList>
  );
};

export default Home;
