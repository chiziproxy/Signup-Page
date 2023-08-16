import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/signup", values)
      .then((res) => {
        console.log("Registered Successfully!!");
        // Clear the form after successful submission
        setValues({
          name: "",
          email: "",
          password: "",
        });
        setSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex bg-dark justify-content-center align-items-center vh-100'>
      <div className='bg-white p-3 rounded '>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit} key={submitted.toString()}>
          <div className='mb-3'>
            <label htmlFor='name'>
              <strong>Name</strong>
            </label>
            <input
              type='text'
              name='name'
              required
              id=''
              placeholder='Enter Name'
              className='form-control rounded-2'
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              required
              name='email'
              id=''
              placeholder='Enter email'
              className='form-control rounded-2'
              onChange={handleChange}
              value={values.email}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              name='password'
              required
              id=''
              placeholder='Enter Password'
              className='form-control rounded-2'
              onChange={handleChange}
              value={values.password}
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Sign Up
          </button>
          <p>You agree to our terms and conditions</p>
          {/* <a
            to='/'
            className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
          ></a> */}
        </form>
      </div>
    </div>
  );
}

export default Signup;
