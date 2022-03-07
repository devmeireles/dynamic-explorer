import Sidebar from 'components/organisms/SideBar';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../screens/temp';
import Connections from '../screens/connectionList';
import Welcome from '../screens/welcome';
// import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dasboard" element={<Dashboard />} />
        <Route path="/connections" element={<Connections />} />
      </Routes>
    </Router>
  );
}
