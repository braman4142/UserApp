import React, { useState } from "react";
import User from "./User";
import { Modal, Button } from "react-bootstrap";
import {connect} from "react-redux";

function UserList(props) {

  return (
    <div>
      {props.userData.map((user) => {
  console.log(user);
        return (
          <User
            user={user}
            key={user.id}
            deleteUser={props.deleteUser}
            editUser={props.editUser}
          />
        );
      })}
    </div>
  );
}
const mapstateToprops=(state)=>{
  return{
    userData: state.users
  }
}

export default  connect(mapstateToprops)(UserList);