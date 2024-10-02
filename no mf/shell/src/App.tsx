import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-xl">Welcome to the Shell App</h2>
      </main>
      <Footer />
    </div>
  );
};

export default App;