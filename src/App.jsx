import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';
import UserForm from './components/UserForm';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;