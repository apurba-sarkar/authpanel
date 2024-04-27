import { useState } from "react";
import Button from "../styles/Button";
// import { loginFun } from "../services/apiAuth";
import { useLogin } from "../authentication/useLogin";

export default function Login() {
  const initialData = {
    email: "pass@gmail.com",
    password: "pass",
  };
  const [user, setUser] = useState(initialData);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const { loginSupa, isLoading } = useLogin();
  // console.log("islaoding",isLoading)
  const handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = user;
    console.log(email, password);
    console.log("-----");
    loginSupa({ email, password });
  };
  return (
    <>
      <div>Login</div>
      <div>
        <label> email</label>
        <input
          type="text"
          placeholder="email"
          value={user.email}
          onChange={handleChange}
          name="email"
        />
        <label> password</label>
        <input
          type="text"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
          name="password"
        />
      </div>
      <Button sizes="medium" varient="danger" onClick={handleSubmit} disabled={isLoading}>
        {!isLoading ? "press to sign up" : "wait"}
      </Button>
    </>
  );
}
