
import React from "react";

function UserList(props) {

  const users = props.data;

  return (
    <div>
      {
        
        users.map((user, index) => {
          return (
            <div key={index}>
              <h1>{user.name}</h1>
              <h3>{user.email}</h3>
              <h4>{user.gen}</h4>
            </div>
          );
        })
      }
    </div>
  );
}
export default UserList;