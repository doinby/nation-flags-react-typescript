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
    <button className='bg-[#FFF] shadow-md flex flex-col items-start text-left'>
      <Link to={'country/' + countryName}>
        <img src={flagUrl} alt={`Flag of ${countryName}`} />
        <div className='px-8 py-10'>
          <h3 className='pb-4'>{countryName}</h3>
          <p className='font-semibold'>
            Population: <span className='font-light'>{population}</span>
          </p>
          <p className='font-semibold'>
            Region: <span className='font-light'>{region}</span>
          </p>
          <p className='font-semibold'>
            Capital: <span className='font-light'>{capital}</span>
          </p>
        </div>
      </Link>
    </button>
  );
};

export default CountryCard;
