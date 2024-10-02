import React from 'react';
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-wells-fargo-gray">
      <Login />
    </div>
  );
};

export default App;