import {useState} from 'react';
import {Listbox} from '@headlessui/react';

const regions = ['Americas', 'Oceania', 'Europe', 'Africa', 'Asia'];

const RegionDropdown = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <Listbox
      value={selectedRegion}
      onChange={setSelectedRegion}
      as='div'
      className='relative'
    >
      <Listbox.Button>{selectedRegion}</Listbox.Button>
      <Listbox.Options className='absolute left-0'>
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
