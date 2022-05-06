import { Login }  from "./pages/login/login";
import { Home } from "./pages/home/home";
import { Erro404 } from "./pages/erro";
import { Router, Routes, Route, Navigate } from "react-router-dom";

import './App.css'
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const {currentUser} = useContext(AuthContext)
  
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login"/>;
  }

  return (
    
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={
          <RequireAuth>
            <Home />
          </RequireAuth>} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
   
  );
}

export default App;
