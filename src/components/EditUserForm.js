import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {connect} from "react-redux";
import {editUser} from "../actions/userActions";

function EditUserForm(props) {
  const [name, setName] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.email);
  const [gen, setgen] = useState(props.user.gen);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlegenChange = (e) => {
    setgen(e.target.value);
  };

  function handleSubmit() {
    let editedUser = {
      name: name,
      email: email,
      gen: gen,
      id: props.user.id,
    };

    console.log(props);

    //calls the edit User function and closes the modal
    props.editUser(props.user.id, editedUser);
    props.toggleModal();
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicgen">
        <Form.Label>gen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter gen"
          value={gen}
          onChange={(e) => handlegenChange(e)}
        />
        <Button onClick={() => handleSubmit()}>Save</Button>
      </Form.Group>
    </Form>
  );
  }
  const mapDispatchToprops ={
    editUser,
  }

  export default connect(null, mapDispatchToprops)(EditUserForm);