/* eslint-disable @typescript-eslint/no-unused-vars */
import {useParams} from 'react-router-dom';
import {baseUrl} from '../data/data';
import useAxiosFetch from '../hooks/useAxiosFetch';

const Country = () => {
  const {countryId} = useParams();
  const endpoint = countryId && '/name/' + countryId + '?fullText=true';
  const url = baseUrl + endpoint;
  const {data, error, isLoading} = useAxiosFetch(url);

  return (
    <>
      {data &&
        data.map((country, idx: number) => {
          if (idx === 0) {
            const {
              name: {
                common: countryName,
                nativeName: {
                  ber: {official: officialName},
                },
              },
              tld: {0: topLevelDomain},
              currencies,
              languages,
              capital,
              population,
              region,
              subregion,
              flags: {png: flagUrl},
            } = country;

            const isMultiCurrencies = Object.keys(currencies).length > 1;
            const getCurrencies = () => {
              let currencyList = '';
              Object.entries(currencies).forEach((obj1) =>
                obj1.map((value: any, idx: number) => {
                  if (idx > 0) {
                    currencyList += value.name + ', ';
                  } else return null;
                })
              );
              return currencyList.slice(0, currencyList.length - 2);
            };

            const isMultiLanguages = Object.keys(languages).length > 1;
            const getLanguages = () => Object.values(languages).join(', ');

            return (
              <article key={countryName}>
                <img src={flagUrl} alt={`Flag of ${countryName}`} />
                <h3>{countryName}</h3>
                <div>
                  <p className='font-semibold'>
                    Native Name:{' '}
                    <span className='font-light'>{officialName}</span>
                  </p>
                  <p className='font-semibold'>
                    Population: <span className='font-light'>{population}</span>
                  </p>
                  <p className='font-semibold'>
                    Region: <span className='font-light'>{region}</span>
                  </p>
                  <p className='font-semibold'>
                    Sub Region: <span className='font-light'>{subregion}</span>
                  </p>
                  <p className='font-semibold'>
                    Capital: <span className='font-light'>{capital}</span>
                  </p>
                  <p className='font-semibold'>
                    Top Level Domain:{' '}
                    <span className='font-light'>{topLevelDomain}</span>
                  </p>
                  <p className='font-semibold'>
                    {isMultiCurrencies ? 'Currencies' : 'Currency'}:{' '}
                    <span className='font-light'>{getCurrencies()}</span>
                  </p>
                  <p className='font-semibold'>
                    {isMultiLanguages ? 'Languages' : 'Language'}:{' '}
                    <span className='font-light'>{getLanguages()}</span>
                  </p>
                </div>
              </article>
            );
          } else return null;
        })}
    </>
  );
};

export default Country;
