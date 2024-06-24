import React, { useState, useEffect } from 'react';

function UserData() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from the server when the component mounts
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>User Data</h2>
      {loading ? (
        <p>Loading user data...</p>
      ) : (
        <ul>
          {userData.map((user, index) => (
            <li key={index}>
              Email: {user.email}, Password: {user.password}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserData;
