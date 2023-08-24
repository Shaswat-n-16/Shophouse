import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Signup = () => {
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({ firstName, lastName, email, password, answer });

      const res = await axios.post("http://localhost:8080/api/v1/auth/signup", {
        firstName,
        lastName,
        email,
        password,
        answer,
      });
      console.log(res);
      if (res.status === 201) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
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
              value={firstName}
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
              value={lastName}
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
              value={password}
              onChange={(e) => setPass(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="answerinput" className="form-label">
              Answer
            </label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="answerInput"
              required
            />
          </div>
          <Link to="/login">Already have an Account</Link>
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
