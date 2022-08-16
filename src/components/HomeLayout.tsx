import {ReactNode} from 'react';

interface Props {
  children?: ReactNode;
}

const HomeLayout = ({children}: Props) => {
  return (
    <>
      <header className='flex justify-between shadow-md px-4 py-8'>
        <h1>Where in the world?</h1>
        <div>
          <p>Dark Mode</p>
        </div>
      </header>

      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
