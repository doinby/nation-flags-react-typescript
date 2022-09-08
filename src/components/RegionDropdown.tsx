import {Listbox} from '@headlessui/react';
import {regions} from '../data/data';
import {ChevronDown} from 'react-feather';

interface Props {
  selectedRegion: {
    name: string;
  };
  setSelectedRegion: (selectedRegion: string) => void;
  setSearchQuery: (query: string) => void;
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
      className='relative w-44'
    >
      <Listbox.Button className='bg-white dark:bg-dark-blue flex justify-between w-full py-[1.1rem] pl-8 pr-6 shadow-sm'>
        {selectedRegion.name} <ChevronDown size={18} />
      </Listbox.Button>
      <Listbox.Options className='bg-white dark:bg-dark-blue absolute left-0 mt-2 flex flex-col shadow-md w-full'>
        {regions.map((region) => (
          <Listbox.Option
            key={region.name}
            value={region}
            className='cursor-pointer hover:bg-light-gray hover:dark:bg-darker-blue px-8 py-3'
          >
            {region.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default RegionDropdown;
