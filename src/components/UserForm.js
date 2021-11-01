import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {connect} from "react-redux";
import {addUser} from "../actions/userActions";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setgen] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email && name) {
    let newUser = {
      name: name,
      email: email,
      gen: gen,
      id: uuid(),

    };


    props.addNewUser(newUser);


    setName("");
    setEmail("");
    setgen("");
  }
}

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <label>email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <label>gen</label>
      <input
        type="gen"
        name="gen"
        value={gen}
        onChange={(e) => setgen(e.target.value)}
      />
      <br></br>
      <input type="submit" />
    </form>
  );
}
const mapDispatchTopprops ={
  addNewUser:addUser,
}
export default connect(null,mapDispatchTopprops) (UserForm);