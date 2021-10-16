import React, { useState } from "react";
import {Col} from "react-bootstrap";
import { v4 as uuid } from "uuid";
import {connect} from "react-redux";
import {addUser} from "../actions/userActions";


function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    if (email && name && gen) {
      let newUser = {
        name: name,
        email: email,
        gen:  gen,
        
        id: uuid(),
      };

      props.addNewUser(newUser);

      setName("");
      setEmail("");
      setGen("");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
<input
        type="gen"
        value={gen}
        onChange={(e) => setGen(e.target.value)}
      />
     <input type="submit" />
    </form>
  );
}
const mapDispatchToProps ={
  addNewUser:addUser
}

export default connect(null, mapDispatchToProps)(UserForm);
