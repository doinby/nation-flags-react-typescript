/* eslint-disable @typescript-eslint/no-unused-vars */
import {useParams} from 'react-router-dom';
import {baseUrl} from '../data/data';
import useAxiosFetch from '../hooks/useAxiosFetch';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import Neighbors from '../components/Country/Neighbors';

const Country = () => {
  const {countryId} = useParams();
  const endpoint = countryId && '/name/' + countryId + '?fullText=true';
  const url = baseUrl + endpoint;
  // console.log('url:', url);
  const {data, error, isLoading} = useAxiosFetch(url);
  const isDataValid = Array.isArray(data) && data.length > 0;

  const getCurrencies = (currencyObject: {}) => {
    const obj1: any = Object.values(currencyObject).map((obj2: any) => {
      return Object.values(obj2).shift();
    });
    return obj1.join(', ');
  };

  const isMultiCurrencies = (currencyObject: {}) =>
    Object.keys(currencyObject).length > 1;

  const getOfficialName = (name: {}) => {
    const obj: any = Object.values(name).pop();
    return obj.official;
  };

  const getLanguages = (languageList: {}) =>
    Object.values(languageList).join(', ');

  const isMultiLanguages = (languageList: {}) =>
    Object.keys(languageList).length > 1;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : !isDataValid ? (
        <ErrorMessage error={error} />
      ) : (
        data.map((country, idx: number) => {
          if (idx === 0) {
            const {
              name: {common: countryName, nativeName},
              tld: {0: topLevelDomain},
              currencies,
              languages,
              capital,
              population,
              region,
              subregion,
              flags: {png: flagUrl},
              borders,
            } = country;

            const hasNeighbor = borders !== undefined;

            return (
              <article
                key={countryName}
                className='flex flex-col md:grid md:grid-cols-3 gap-8'
              >
                <img src={flagUrl} alt={`Flag of ${countryName}`} />
                <div className='flex flex-col gap-2'>
                  <h3>{countryName}</h3>
                  <p className='country-title'>
                    Native Name:
                    <span className='country-description'>
                      {getOfficialName(nativeName)}
                    </span>
                  </p>
                  <p className='country-title'>
                    Population:
                    <span className='country-description'>{population}</span>
                  </p>
                  <p className='country-title'>
                    Region:<span className='country-description'>{region}</span>
                  </p>
                  <p className='country-title'>
                    Sub Region:
                    <span className='country-description'>{subregion}</span>
                  </p>
                  <p className='country-title'>
                    Capital:
                    <span className='country-description'>{capital}</span>
                  </p>
                </div>

                <div className='flex flex-col gap-2'>
                  <p className='country-title'>
                    Top Level Domain:
                    <span className='country-description'>
                      {topLevelDomain}
                    </span>
                  </p>
                  <p className='country-title'>
                    {isMultiCurrencies(currencies) ? 'Currencies' : 'Currency'}:
                    <span className='country-description'>
                      {getCurrencies(currencies)}
                    </span>
                  </p>
                  <p className='country-title'>
                    {isMultiLanguages(languages) ? 'Languages' : 'Language'}:
                    <span className='country-description'>
                      {getLanguages(languages)}
                    </span>
                  </p>
                </div>
                <div className='col-span-3 flex flex-col gap-2'>
                  <p className='country-title'>
                    {hasNeighbor ? 'Border Countries: ' : 'Border Country: '}
                  </p>
                  {hasNeighbor ? (
                    <Neighbors neighborList={borders} />
                  ) : (
                    <button className='btn-primary self-start' disabled>
                      None
                    </button>
                  )}
                </div>
              </article>
            );
          } else return null;
        })
      )}
    </>
  );
};

export default Country;
