import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage.jsx";
import Navbar from "./components/Navbar";
import AuthorSearch from "./pages/AuthorSearch.jsx";
import BookSearch from "./pages/BookSearch.jsx";
import ReadingList from "./pages/ReadingList.jsx";
import Homepage from "./pages/Homepage.jsx";

function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <div className="App">

      {user ? (
        <>
          <Navbar user={user} setUser={setUser} />
          
          <Routes>
            <Route path="/AuthorSearch" element={<AuthorSearch user={user} setUser={setUser} />} />
            <Route path="/BookSearch" element={<BookSearch user={user} setUser={setUser} />}/>
            <Route path="/ReadingList" element={<ReadingList user={user} setUser={setUser} />} />
          </Routes>
          
          <Homepage />
        </>
      ) : (
        <AuthPage user={user} setUser={setUser}/>
      )}

    </div>
  );
}

export default App;
