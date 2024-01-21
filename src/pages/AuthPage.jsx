import {React,useState} from "react";
// import styles from './AuthPage.module.css';
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import logo from "../downloads/logo.png"

export default function AuthPage({ setUser }) {
  
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <nav id="loginNav" style={{display:"flex", justifyContent: "space-between"}}>
        <div id="navDatas" style={{ display: "flex",  alignItems: "center", justifyContent: "center"}} >
          <img src={logo} alt="Bookkeep" id="logogogo"/>
        </div>
        <div id="loginNavbox">
          <h3 className="logorsign" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
        </div>
      </nav>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}

