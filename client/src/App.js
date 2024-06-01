import './App.css';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
