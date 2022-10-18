import React from 'react';

export default function UserInformation({ userInfo }) {
  return (
    <>
      <h3>User Information</h3>
      <p>
        <strong>username:</strong> {userInfo.first_name} {userInfo.last_name}
      </p>
      <p>
        <strong>email:</strong> {userInfo.email}
      </p>
    </>
  );
}
