import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home, Details, Default } from './pages';
import { useGlobalContext } from './context';

function App() {
  const { isLoading } = useGlobalContext();
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details' element={<Details />} />
      <Route path='/*' element={<Default />} />
    </Routes>
  );
}

export default App;
