
import './App.css';
import LoginUi from './pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Display } from './pages/Display';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginUi />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
