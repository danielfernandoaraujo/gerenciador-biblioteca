import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Erro404 } from "./pages/erro";
import { Router, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { Alunos } from "./pages/lista_alunos";
import { Livros } from "./pages/lista_livros";
import { Emprestimos } from "./pages/lista_emprestimos";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="/alunos"
        element={
          <RequireAuth>
            <Alunos />
          </RequireAuth>
        }
      />
      <Route
        path="/livros"
        element={
          <RequireAuth>
            <Livros />
          </RequireAuth>
        }
      />
      <Route
        path="/emprestimos"
        element={
          <RequireAuth>
            <Emprestimos />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}

export default App;
