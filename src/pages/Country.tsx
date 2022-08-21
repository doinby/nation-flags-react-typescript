/* eslint-disable @typescript-eslint/no-unused-vars */
import {useParams} from 'react-router-dom';
import {baseUrl} from '../data/data';
import useAxiosFetch from '../hooks/useAxiosFetch';

// interface Props {
//   data: {
//     name: {common: string};
//     capital: string;
//     population: number;
//     continents: [string];
//     flags: {png: string};
//   };
// }

const Country = () => {
  const {countryId} = useParams();
  const countryUrl = `${baseUrl}/name/${countryId}/?fullText=true`;
  const {data, error, isLoading} = useAxiosFetch(countryUrl);
  console.log('data:', data[0]);

  return (
    <>
      <p>Country {countryId}</p>
    </>
  );
};

export default Country;
