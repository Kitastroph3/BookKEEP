import React from "react";
import { Link } from "react-router-dom";
import * as userService from '../utilities/users-service'
import logo from '../downloads/logo.png'

function Navbar({user ,setUser}) {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <header>
      <nav>
       
          <div id="navDatas" style={{ display: "flex",  alignItems: "center", justifyContent: "center"}} >
             <Link to="/">
                <img src={logo} alt="Bookkeep" id="logogogo"/>
              </Link>
          </div>
        <div id="navLinks">
          <Link to="/AuthorSearch" className="navLink">Author Search</Link>
          <Link to="/ReadingList" className="navLink">Reading List</Link>
          <Link to="/BookSearch" className="navLink">Book Search</Link>
        </div>
      </nav>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "right", gap: "20px", paddingTop: "5px"}}>
        <p>Welcome, {user.name} | {user.email}</p>
        <Link to="" onClick={handleLogOut}><button>Log-Out</button></Link>
      </div>
    <hr/>
    </header>
  ); 
}   


export default Navbar;
