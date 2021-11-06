import React, { useState, useEffect} from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllUsers } from "./actions/userActions";
import { connect } from "react-redux";

function App(props) {
  
  const [users, setUsers] = useState([]);
  useEffect(() => {
		props.getAllUsers();
	}, []);

  


  function addUser(user) {
  
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      <UserForm addUser={addUser} />
      <UserList data={users} />
    </div>
  );
}

const mapDispatchToProps = {
	getAllUsers: getAllUsers,
};

export default connect(null, mapDispatchToProps)(App);
