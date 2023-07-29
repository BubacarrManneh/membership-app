
import Home from './Pages/Home';
import './Styles/styles.css';

import background from "./bacgrounds/bg-2.jpg"

import {Route, Routes } from 'react-router-dom';
import SignInPage from './Pages/SignInPage'
import RegistrationPage from './Pages/RegistrationPage';


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", alignContent: "center"}}>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
      </Routes>
      </div>
  );
}

export default App;
