import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { toast } from "react-toastify";
const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fname, lname, email, pass);
    toast.success("Registered Successfully");
  };
  return (
    <Layout>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstnameinput" className="form-label">
              First Name
            </label>
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="form-control"
              id="firstnameInput"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastnameinput" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="form-control"
              id="lastnameInput"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputEmail" className="form-label">
              Enter Your Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
