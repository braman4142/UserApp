import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function EditUserForm(props) {
  const [name, setName] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.email);
  const [gen, setGen] = useState(props.user.gen);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenChange = (e) => {
      setGen(e.target.value);
  }

  function handleSubmit() {
  let editedUser = {
      name: name,
      email: email,
      gen: gen,
      id: props.user.id,
    };

     props.editUser(editedUser, props.user.id);
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
        <Button onClick={() => handleSubmit()}>Save</Button>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGen">
        <Form.Label>Gen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter gen"
          value={name}
          onChange={(e) =>  handleGenChange(e)}
        />
      </Form.Group>

    </Form>
  );
}