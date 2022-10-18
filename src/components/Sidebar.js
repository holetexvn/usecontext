import React, { useContext } from 'react';
import { AppContext } from '../Context/AppProvider';
import UserInformation from './UserInformation';

export default function Sidebar() {
  const { userInfo, isOpen } = useContext(AppContext);
  if (!isOpen) return null;
  return (
    <div
      className='sidebar'
      style={{
        backgroundColor: 'rgb(228, 228, 228)',
        padding: 10,
        gridColumn: '1 / 2',
        gridRow: '1 / 3',
      }}
    >
      <h2>Sidebar</h2>
      <UserInformation userInfo={userInfo} />
    </div>
  );
}
