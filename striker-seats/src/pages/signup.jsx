import { useState } from "react";
import "../style/auth/login.css";
import { SignUpFirebase } from "../Services/Authentication";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Log out the form data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    const signupData = await SignUpFirebase({name,email,password});
    if(signupData.success) {
      navigate('/dashboard');
    }
    console.log(signupData);
    // You can perform further actions like sending the data to a server for registration
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
                Signup to <strong>Striker Seats</strong>
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
                <div className="form-group first mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Deo"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                  value="Signup"
                  className="btn btn-block btn-primary"
                />
              </form>
              <p className="mt-3">
                Already have a account <a href="/login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
