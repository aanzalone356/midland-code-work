import NavBar from './components/navBar'
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import { LoginWithAuth, MainPageWithAuth } from './components/protectedRoutes';
import { AnimeListWithAuth } from './components/protectedRoutes';
import { RandomAnimeWithAuth } from './components/protectedRoutes';

//Re add NavBar at line 16
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<MainPageWithAuth/>}/>
        <Route path='/animeList' element={<AnimeListWithAuth/>}/>
        <Route path='/randomAnime' element={<randomAnimeWithAuth/>}/>
        <Route path='/login' element={<LoginWithAuth/>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
