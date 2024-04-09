import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import MyComponent from './components/Mainpage/Main.jsx';
import Fitness from './components/Fitness/App.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MyComponent />} />
        <Route path="/header" element={<Header />} /> {/* Correct closing and syntax */}
        <Route path="/Main" element={<MyComponent />} /> {/* Correct closing and syntax */}
        <Route path="/Fitness" element={<Fitness />} /> {/* Correct closing and syntax */}
      </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById('root'); // No need for createRoot
ReactDOM.render(<App />, root); // Render the App component directly
