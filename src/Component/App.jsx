import { Routes, Route } from 'react-router-dom';
import '../Styles/app.css'

import Home from '../Routes/Home';
import About from '../Routes/About';
import Login from '../Routes/Login';
import Profile from '../Routes/Profile';
import NotMatch from '../Routes/NoMatch';
import Layout from './Layout';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}
