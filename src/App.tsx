import {Route, Routes} from 'react-router-dom';
import NotFound from './pages/404';
import Home from './pages/Home';
import Region from './pages/Region';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='region'>
        <Route index element={<Home />} />
        <Route path=':regionId' element={<Region />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
