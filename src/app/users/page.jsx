import React from 'react';

const UsersPage =async () => {
  const res = await fetch("http://localhost:5000/users")
  const users = await res.json();
  console.log(users);
    return (
        <div>
            <h2>User Data coming soon:{users.length}</h2>
            {
                users.map((user,i) => <li key={i}>{user.name}: {user.email}</li> )
            }
        </div>
    );
};

export default UsersPage;