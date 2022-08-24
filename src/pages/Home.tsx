/* eslint-disable @typescript-eslint/no-unused-vars */
import useAxiosFetch from '../hooks/useAxiosFetch';
import CountryCard from '../components/CountryCard';

interface Props {
  url: string;
}

const Home = ({url}: Props) => {
  const {data, error, isLoading} = useAxiosFetch(url);
  console.log('error:', error);

  return (
    <>
      {isLoading ? (
        <div className='grow flex place-items-center'>
          <img
            src='/images/spinner.svg'
            alt='Loading...'
            className='h-12 mb-28'
          />
        </div>
      ) : (
        <section
          id='country-list-section'
          className='container grid grid-flow-row grid-cols-[repeat(auto-fill,_minmax(264px,_auto))] gap-12 justify-items-center'
        >
          {Array.isArray(data) && data.length > 1 ? (
            data.map((countryData, idx) => {
              // if (idx === 0) {
              //   console.log(countryData);
              // }
              return <CountryCard key={idx} countryData={countryData} />;
            })
          ) : (
            <div className='grow flex place-items-center'>
              <p className='place-self-center'>{error}</p>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Home;
