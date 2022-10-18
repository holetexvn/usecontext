import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import { useState, useEffect } from 'react';
import { AppProvider } from './Context/AppProvider';

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <Header />
        <Content />
        <Sidebar />
      </AppProvider>
    </div>
  );
}

export default App;
