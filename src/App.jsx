import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";

import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/not-found/NotFound";
import { useEffect, useState } from "react";
import ProtectedRoute from "./router/ProtectedRoute";
import PublicRoute from "./router/PublicRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem("user-token");
    if(token){
      setIsAuthenticated(true);
      navigate("/dashboard")
    }
  },[])

  return (
    <>
      <Routes>
        {/* Ummumiy route */}
        <Route path="/" element={<Home />} />

        {/*Authentifikatsiyadan o'tmaganlar uchun ko'rinadigan routelar  */}
        <Route path="/auth" element={<PublicRoute isAuthenticated={isAuthenticated}/>}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        </Route>

        {/*Authentifikaysiyadan o'tganlar uchun ko'rinadigan route */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
        >
          <Route index element={<Dashboard setIsAuthenticated={setIsAuthenticated} />} />
        </Route>

        {/* Noto'gri routelar uchun */}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}

export default App;
