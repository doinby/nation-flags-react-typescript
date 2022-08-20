interface Props {
  setSearchQuery: any;
}

const SearchBar = ({setSearchQuery}: Props) => {
  return (
    <>
      <input
        placeholder='Search for country...'
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          setSearchQuery('/name/' + target.value);
        }}
        className='block md:inline-block'
      />
    </>
  );
};

export default SearchBar;
