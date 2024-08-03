import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/home';
import Download from './pages/download';
import Forum from './pages/forum';
import Careers from './pages/careers';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="download" element={<Download/>}></Route>
      <Route path="forum" element={<Forum/>}></Route>
      <Route path="careers" element={<Careers/>}></Route>
    </Routes> 
  );
}

export default App;