// ui-app/src/components/LoginForm.tsx
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    alert(`Logged in as ${username}`);
  };

  return (
    <div className="max-w-md mx-auto bg-wells-fargo-gray p-6 rounded shadow-md">
      <h2 className="text-2xl mb-4 text-wells-fargo-red">Login</h2>
      <div className="mb-4">
        <label className="block text-wells-fargo-dark-gray mb-2">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-wells-fargo-dark-gray mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button
        onClick={handleLogin}
        className="w-full bg-wells-fargo-red text-white py-2 rounded hover:bg-red-700"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
