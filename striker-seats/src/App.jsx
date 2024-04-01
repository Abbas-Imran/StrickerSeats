import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Fixture from "./pages/fixture";
import { useContext } from "react"; // Importing useContext hook
import { AuthContext } from "./Context/AuthContext"; // Importing AuthContext for authentication
import DashboardFixture from "./pages/Dashboard/dashboardFixture";

function App() {
  const { currentUser } = useContext(AuthContext); // Destructuring admin from AuthContext

  // Function to render protected routes based on admin status
  const protectedRoute = (component) => {
    console.log(currentUser, "admin");
    if (currentUser) {
      return component;
    } else {
      return <Login />;
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fixture" element={<Fixture />} />
        <Route path="/dashboard" element={protectedRoute(<DashboardFixture />)} />
      </Routes>
    </>
  );
}

export default App;
