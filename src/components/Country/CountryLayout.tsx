import {Outlet} from 'react-router-dom';
import Header from '../Header';
import {ArrowLeft} from 'react-feather';
import {Link} from 'react-router-dom';
import Footer from '../Footer';

interface Props {
  theme: string;
  setTheme: any;
}

const CountryLayout = ({theme, setTheme}: Props) => {
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main className='container place-self-center flex flex-col py-6 px-6 gap-8 mx-6 md:mx-0'>
        <Link to='/' className='btn-primary self-start flex items-center'>
          <ArrowLeft size={18} className='mr-2' />
          Back
        </Link>
        <Outlet />
      </main>
      <Footer theme={theme} />
    </>
  );
};

export default CountryLayout;
