import {Link} from 'react-router-dom';

interface Props {
  countryData: {
    name: {common: string};
    capital: string;
    population: number;
    continents: [string];
    flags: {png: string};
  };
}

const CountryCard = ({countryData}: Props) => {
  const {
    name: {common: countryName},
    capital,
    population,
    continents: region,
    flags: {png: flagUrl},
  } = countryData;

  return (
    <button className='bg-[#FFF] shadow-sm flex flex-col items-start text-left'>
      <Link to={'country/' + countryName}>
        <img src={flagUrl} alt={`Flag of ${countryName}`} />
        <div className='flex flex-col gap-2 px-8 py-8'>
          <h3 className='mb-4'>{countryName}</h3>
          <p className='country-title'>
            Population:{' '}
            <span className='country-description'>{population}</span>
          </p>
          <p className='country-title'>
            Region: <span className='country-description'>{region}</span>
          </p>
          <p className='country-title'>
            Capital: <span className='country-description'>{capital}</span>
          </p>
        </div>
      </Link>
    </button>
  );
};

export default CountryCard;
