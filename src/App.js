import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import { useState, useEffect } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch('https://reqres.in/api/users/2')
      .then((res) => res.json())
      .then(({ data }) => {
        console.log({ data });
        setUserInfo(data);
      });
  }, []);

  return (
    <div className='App'>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} userInfo={userInfo}/>
      <Content isOpen={isOpen} />
      {isOpen && <Sidebar  userInfo={userInfo} />}
    </div>
  );
}

export default App;
