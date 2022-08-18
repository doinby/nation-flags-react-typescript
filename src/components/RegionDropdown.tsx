import {Listbox} from '@headlessui/react';
import {regions} from '../data/data';
import {Link} from 'react-router-dom';

interface Props {
  selectedRegion: string;
  setSelectedRegion: any;
}

const RegionDropdown = ({selectedRegion, setSelectedRegion}: Props) => {
  return (
    <Listbox
      value={selectedRegion}
      onChange={setSelectedRegion}
      as='div'
      className='relative'
    >
      <Listbox.Button>{selectedRegion}</Listbox.Button>
      <Listbox.Options className='absolute left-0 bg-white'>
        {regions.map((regionName) => (
          <Listbox.Option key={regionName} value={regionName}>
            {regionName === 'All' ? (
              <Link to='/'>{regionName}</Link>
            ) : (
              <Link to={`/region/${regionName}`}>{regionName}</Link>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default RegionDropdown;
