import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Details, Default } from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/*' element={<Default />} />
      </Routes>
    </>
  );
}

export default App;
