interface Props {
  flagUrl: string;
  name: string;
  population: number;
  region: [];
  capital: [];
  idx?: number;
  id?: string;
}

const CountryCard = ({
  flagUrl,
  name,
  population,
  region,
  capital,
  idx,
}: Props) => {
  return (
    <article className='w-[264px] bg-[#FFF] shadow-md'>
      <img src={flagUrl} alt={`Flag of ${name}`} />
      <div className='px-8 py-10'>
        <h3 className='pb-4'>{name}</h3>
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
    </article>
  );
};

export default CountryCard;
