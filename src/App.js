import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './components/MyNavbar';
import MyHeader from './components/MyHeader';
import MyMovies from './components/MyMovies';

function App() {
  return (
    <div className='App'>
      <MyNavbar></MyNavbar>
      <MyHeader></MyHeader>
      <MyMovies search="Lord of the rings"></MyMovies>
      <MyMovies search="Star Wars"></MyMovies>
      <MyMovies search="Pirates of the Caribbean"></MyMovies>
      <MyMovies search="Underworld"></MyMovies>
      <MyMovies search="Zoolander"></MyMovies>
    </div>
    
  )
}

export default App;
