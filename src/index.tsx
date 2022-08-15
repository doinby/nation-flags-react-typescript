import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        {/* <Route path='teams' element={<Teams />}> */}
        {/* <Route path=':teamId' element={<Team />} /> */}
        {/* <Route path='new' element={<NewTeamForm />} /> */}
        {/* <Route index element={<LeagueStandings />} /> */}
        {/* </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
