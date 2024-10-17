import { useState } from "react";
import PasswordInput from "../../components/Input/PasswordInput";
import NavBar from "../../components/Navbar/NavBar";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper.js";

const LoginIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const hadleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }
    setError("");
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={hadleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input
              type="email"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Not register yet?{" "}
              <Link
                to="/signup"
                className="font-medium text-primary hover:underline"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginIn;
