import React from "react";
import { Link } from "react-router-dom";
import * as userService from '../utilities/users-service'

function Navbar({user ,setUser}) {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <>
      <nav style={{ justifyContent: "space-evenly", display: "flex" }}>

      <div style={{justifyContent:'space-around'}}>
        <p>Welcome, {user.name} </p> 
        <p>Logged In: {user.email}</p>
        <Link to="" onClick={handleLogOut}><button>Log-Out</button></Link>
      </div>

        <Link to="/AuthorSearch">Author Search</Link>
        <Link to="/ReadingList">Reading List</Link>
        <Link to="/BookSearch">Book Search</Link>
      </nav>
    </>
  );
}

export default Navbar;
