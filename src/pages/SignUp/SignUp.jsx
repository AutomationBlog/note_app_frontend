import { useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import { axiosInstance } from "../../utils/axiosInstance";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!firstName && !lastName) {
      setError("Please enter your first name");
      return;
    }
    if (!lastName) {
      setError("Please enter your last name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError(null);
    setIsLoading(true);
    // Perform signup logic here
    try {
      const response = await axiosInstance.post("/api/auth/signup", {
        name: firstName + " " + lastName,
        email,
        password,
      });
      if (response.data.token) {
        setIsLoading(false);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }
      firstName("");
      lastName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.response.data.message || "Error signing up");
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7 text-center">SignUp</h4>
            <input
              type="text"
              placeholder="First Name"
              className="input-box"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input-box"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
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
            <button type="submit" className="btn-primary" disabled={isLoading}>
              {isLoading ? <LoadingSpinner /> : "Create Account"}
            </button>
            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
