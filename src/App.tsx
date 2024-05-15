import { useState } from 'react'
import './App.css'
import {AppRouter} from './AppRouter'
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {

  return (
    <Router>
      <AppRouter />
    </Router>
    
  );
}

export default App
