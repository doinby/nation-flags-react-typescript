import {Listbox} from '@headlessui/react';
import {regions} from '../data/data';
import {ChevronDown} from 'react-feather';

interface Props {
  selectedRegion: {
    name: string;
  };
  setSelectedRegion: any;
  setSearchQuery: any;
}

const RegionDropdown = ({
  selectedRegion,
  setSelectedRegion,
  setSearchQuery,
}: Props) => {
  return (
    <Listbox
      value={selectedRegion}
      onChange={(value: any) => {
        setSelectedRegion(value);
        setSearchQuery(value.endpoint);
      }}
      as='div'
      className='relative'
    >
      <Listbox.Button className='bg-white flex justify-between w-[15rem] py-[1.1rem] px-8 shadow-sm'>
        {selectedRegion.name} <ChevronDown size={18} />
      </Listbox.Button>
      <Listbox.Options className='bg-white absolute left-0 flex flex-col gap-2 w-[15rem] mt-2 px-8 py-6 shadow-md'>
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
