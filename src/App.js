
import Home from './Pages/Home';
import './Styles/styles.css';

import {Route, Routes } from 'react-router-dom';
import SignInPage from './Pages/SignInPage'
import RegistrationPage from './Pages/RegistrationPage';


function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
      </Routes>
      </div>
  );
}

export default App;
