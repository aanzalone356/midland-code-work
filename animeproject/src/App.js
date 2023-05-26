import NavBar from './components/navBar'
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from 'react-router-dom';
import { MainPageWithAuth } from './components/protectedRoutes';
import { AnimeListWithAuth } from './components/protectedRoutes';
import { RandomAnimeWithAuth } from './components/protectedRoutes';

//Re add NavBar at line 15
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' exact element={<MainPageWithAuth/>}/>
        <Route path='/animeList' element={<AnimeListWithAuth/>}/>
        <Route path='/randomAnime' element={<randomAnimeWithAuth/>}/>
      </Routes>
    </Router>
  );
}

export default App;
