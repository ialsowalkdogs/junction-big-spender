import React from 'react';
import Priorities from './components/Priorities';
import Setup from './components/Setup';
import Dashboard from './components/Dashboard';
import { Router } from '@reach/router';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Setup path="setup" />
        <Priorities path="priorities" />
        <Dashboard path="/" />
      </Router>
    </div>
  );
};

export default App;
