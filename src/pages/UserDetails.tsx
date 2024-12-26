import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <div>
      <h1>User Details</h1>
      <p>Viewing details for user ID: {userId}</p>
      <div>
        <h2>User Information</h2>
        <ul>
          <li>User ID: {userId}</li>
          <li>Name: John Doe</li>
          <li>Email: john@example.com</li>
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
