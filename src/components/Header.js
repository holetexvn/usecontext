import React, { useContext } from 'react';
import { AppContext } from '../Context/AppProvider';

export default function Header() {
  const { userInfo, isOpen, setIsOpen, isDay, setIsDay, themeStyle } =
    useContext(AppContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = (value) => {
    setIsDay(value);
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
        alignItems: 'center',
        ...themeStyle,
      }}
    >
      <div style={{ marginRight: 10, fontWeight: 'bold' }}>
        Hello! {userInfo.first_name} {userInfo.last_name}
      </div>
      <p style={{ cursor: 'pointer', marginRight: 10 }} onClick={toggleSidebar}>
        My profile
      </p>
      <label className='switch'>
        <input
          type='checkbox'
          checked={isDay}
          onChange={(e) => toggleTheme(e.target.checked)}
        />
        <span className='slider round'></span>
      </label>
    </div>
  );
}
