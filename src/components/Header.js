import React, { useContext } from 'react';
import { AppContext } from '../Context/AppProvider';

export default function Header() {
  const { userInfo, isOpen, setIsOpen } = useContext(AppContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className='header'
      style={{
        display: 'flex',
        justifyContent: 'right',
        backgroundColor: 'rgb(228, 228, 228)',
        padding: '10px',
        gridColumn: isOpen ? '2 / 4' : '1 / 4',
        gridRow: '1 / 2',
      }}
    >
      <div style={{ marginRight: 10, fontWeight: 'bold' }}>
        Hello! {userInfo.first_name} {userInfo.last_name}
      </div>
      <p style={{ cursor: 'pointer' }} onClick={toggleSidebar}>
        My profile
      </p>
    </div>
  );
}
