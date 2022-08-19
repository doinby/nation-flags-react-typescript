import {ReactNode} from 'react';

interface Props {
  children?: ReactNode;
}

const CountryList = ({children}: Props) => {
  return (
    <section
      id='country-list-section'
      className='container grid grid-flow-row grid-cols-[repeat(auto-fill,_minmax(264px,_auto))] gap-16 justify-items-center'
    >
      {children}
    </section>
  );
};

export default CountryList;
