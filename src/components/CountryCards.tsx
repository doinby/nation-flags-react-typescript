import CountryCard from './CountryCard';

interface Props {
  data: any;
  error: string;
}

const CountryCards = ({data, error}: Props) => {
  const isDataValid = Array.isArray(data) && data.length > 1;
  const errorMessage = (
    <div className='grow flex place-items-center'>
      <p className='font-bold'>{error}</p>
    </div>
  );

  return (
    <>
      {!isDataValid ? (
        errorMessage
      ) : (
        <section className='container grid grid-flow-row grid-cols-[repeat(auto-fill,_minmax(264px,_auto))] gap-12 justify-items-center'>
          {data.map((countryData, idx) => {
            // if (idx === 0) {
            //   console.log(countryData);
            // }
            return <CountryCard key={idx} countryData={countryData} />;
          })}
        </section>
      )}
    </>
  );
};

export default CountryCards;
