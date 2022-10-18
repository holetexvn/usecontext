import React from 'react';

export default function Header({ isOpen, setIsOpen }) {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

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
      <div>Hello! </div>
      <p style={{ cursor: 'pointer' }} onClick={toggleSidebar}>My profile</p>
    </div>
  );
}
