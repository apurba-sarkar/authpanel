import { useState } from "react";
import Button from "../styles/Button";

export default function Signup() {
  const initialData = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialData);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <div>Signup</div>
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
      <Button sizes="medium" varient="danger" onClick={handleSubmit}>
        press to sign up
      </Button>
    </>
  );
}
