import Topbar from './components/topbar/Topbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';

function App() {
  const user = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Register /> : <Home />} />
        <Route path="/login" element={user ? <Login /> : <Home />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
