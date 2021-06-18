import React from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";
import "../css/RegisterHost.css";
import dog from "../assets/images/dog.png";

export default function Login() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const sendForm = (e) => {
		e.preventDefault();

		fetch("http://localhost:3001/api/users/login", {
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then(console.log);

		return false;
	};
  return (
    <div>
      <div id="login-section">
        <form className="login-form" onSubmit={(e) => sendForm(e)}>
          <h1 className="login-header">Log In to Find Parking</h1>
          <img id="dog-icon" src={dog} alt="dog" />
          <input
            className="login-input-1"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className="login-input-2"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="login-button" type="submit">
            Log In
          </button>
          <Link className="register-link" to="/RegisterUser">
            <p>Not signed up? Click here to make an account!</p>
          </Link>
        </form>
      </div>
    </div>
  );

}
