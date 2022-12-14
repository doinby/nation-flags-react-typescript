import {Search} from 'react-feather';

interface Props {
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({setSearchQuery}: Props) => {
  return (
    <div
      id='search-container'
      className='relative flex items-center md:w-[50%]'
    >
      <Search color='gray' size={18} className='absolute left-8' />
      <input
        placeholder='Search for country...'
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          setSearchQuery('/name/' + target.value);
        }}
        className='dark:bg-dark-blue pl-20 pr-6 py-[1.1rem] shadow-sm w-full'
      />
    </div>
  );
};

export default SearchBar;
