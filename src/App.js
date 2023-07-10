
import Home from './Pages/Home';
import './Styles/styles.css';

import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import SignInPage from './Pages/SignInPage'
import RegistrationPage from './Pages/RegistrationPage';


function App() {
  return (
    <div className="App">

        <Router >
          <Routes >
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <Router >
          <Routes >
            <Route path="signin" element={<SignInPage />} />
          </Routes>
        </Router>

        <Router>
          <Routes >
            <Route path="signup" element={<RegistrationPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
