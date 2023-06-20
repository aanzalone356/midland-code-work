import './App.css';
import Menu from './components/Menu';
import {HomePageWithAuth} from './components/ProtectedRoutes';
import {LoginPageWithAuth} from './components/ProtectedRoutes';
import {SearchPageWithAuth} from './components/ProtectedRoutes';
import {FavoritesPageWithAuth} from './components/ProtectedRoutes';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' exact element={<HomePageWithAuth />} />
        <Route path='/Login' element={<LoginPageWithAuth />} />
        <Route path='/Search' element={<SearchPageWithAuth />} />
        <Route path='/FavortiesPage' element={<FavoritesPageWithAuth />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>  
  );
}

export default App;
