import {Listbox} from '@headlessui/react';
import {regions} from '../data/data';

interface Props {
  selectedRegion: {
    name: string;
  };
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
      <Listbox.Button>{selectedRegion.name}</Listbox.Button>
      <Listbox.Options className='absolute left-0 bg-white'>
        {regions.map((region) => (
          <Listbox.Option key={region.name} value={region}>
            {region.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default RegionDropdown;
