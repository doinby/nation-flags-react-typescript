import useAxiosFetch from '../../hooks/useAxiosFetch';
import {baseUrl} from '../../data/data';
import {Link} from 'react-router-dom';

interface Props {
  neighborNickname: string;
}

const Neighbor = ({neighborNickname}: Props) => {
  const urlData = baseUrl + '/alpha/' + neighborNickname;
  const {data} = useAxiosFetch(urlData);
  const isDataValid = Array.isArray(data) && data.length > 0;

  return (
    <>
      {isDataValid
        ? data.map((country) => {
            const {
              name: {common: countryName},
            } = country;
            return (
              <Link
                to={'/country/' + countryName}
                key={countryName}
                className='btn-primary'
              >
                {countryName}
              </Link>
            );
          })
        : null}
    </>
  );
};

export default Neighbor;
