import React, { FC } from 'react';
import Priorities from './components/Priorities';
import Setup from './components/Setup';
import Dashboard from './components/Dashboard';
import { Router } from '@reach/router';
import BasicInfo from './components/BasicInfo';
import SpendingRequest from './components/SpendingProposal/SpendingRequest';

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <BasicInfo path="start" />
        <Setup path="setup" />
        <Priorities path="priorities" />
        <SpendingRequest path="spend" />
        <Dashboard path="/" />
      </Router>
    </div>
  );
};

export default App;
