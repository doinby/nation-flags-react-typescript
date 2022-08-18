import {Listbox} from '@headlessui/react';
import {regions} from '../data/data';

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
        {regions.map((regionName, idx) => (
          <Listbox.Option key={`region-${idx}`} value={regionName}>
            {regionName}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default RegionDropdown;
