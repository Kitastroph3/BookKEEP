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
    <header>
    <nav style={{display:"flex", justifyContent: "space-between"}}>
        <div id="navDatas">
          <p>LOGO</p>
        </div>
        <div id="navLinks">
          <Link to="/AuthorSearch" className="navLink">Author Search</Link>
          <Link to="/ReadingList" className="navLink">Reading List</Link>
          <Link to="/BookSearch" className="navLink">Book Search</Link>
        </div>
      </nav>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "right", gap: "30px", paddingRight: "38px"}}>
        <p>Welcome, {user.name} | {user.email}</p>
        <Link to="" onClick={handleLogOut}><button>Log-Out</button></Link>
      </div>
    <hr/>
    </header>
  ); 
}   


export default Navbar;
