import React from 'react';
import Priorities from './components/Priorities';
import Setup from './components/Setup';

const App: React.FC = () => {
  return (
    <div className="App">
      <Setup />
      <Priorities />
    </div>
  );
};

export default App;
