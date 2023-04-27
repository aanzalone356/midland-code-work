import './App.css';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import {LoginPageWithAuth} from './components/ProtectedRoutes';
import {SearchPageWithAuth} from './components/ProtectedRoutes';
import {FavoritesPageWithAuth} from './components/ProtectedRoutes';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/Login' element={<LoginPageWithAuth />} />
        <Route path='/Search' element={<SearchPageWithAuth />} />
        <Route path='/FavortiesPage' element={<FavoritesPageWithAuth />} />
      </Routes>
    </Router>  
  );
}

export default App;
