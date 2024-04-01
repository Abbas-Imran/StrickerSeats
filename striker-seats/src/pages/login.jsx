import { useState, useContext, useEffect  } from "react";
import "../style/auth/login.css";
import { LoginFirebase } from "../Services/Authentication";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect to dashboard if user is already logged in
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = await LoginFirebase({ email, password });
    if(loginData.success) {
      navigate('/dashboard');
    }
  };
  return (
    <div className="d-lg-flex half">
      <div
        className="bg order-1 order-md-2"
        style={{ backgroundImage: "url('/footballCroud.jpg')" }}
      ></div>
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h3>
                Login to <strong>Striker Seats</strong>
              </h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                consectetur adipisicing.
              </p>
              <form onSubmit={handleSubmit} method="post">
                <div className="form-group first mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your-email@gmail.com"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group last mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Log In"
                  className="btn btn-block btn-primary"
                />
              </form>
              <p className="mt-3">
                Do not have Account <a href="/signup">Signup</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
