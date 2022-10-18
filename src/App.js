import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import { useState, useEffect } from 'react';
import { AppProvider } from './Context/AppProvider';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
      <AppProvider>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Content isOpen={isOpen} />
        {isOpen && <Sidebar />}
      </AppProvider>
    </div>
  );
}

export default App;
