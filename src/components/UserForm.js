
import React, { useState } from "react";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  function handleSubmit(e) {

    e.preventDefault()
    let user = {
      name: name,
      email: email,
      gen: gen,
    };

    props.addUser(user);

    
    setName("");
    setEmail("");
    setGen ("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="fullname"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
       <input
        type="gen"
        name="gen"
        value={gen}
        onChange={(e) => setGen(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
export default UserForm;