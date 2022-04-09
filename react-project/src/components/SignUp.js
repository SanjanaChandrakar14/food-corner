import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Select from 'react-select';
import ApiService from '../services/ApiService';

import './Login.css';
import { connect } from 'react-redux';

const SignUp = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleFormValidation = () => {// Front end validation before API call 
    let formErrors = {};
    let formIsValid = true;

    //name
    if (!name) {
      formIsValid = false;
      formErrors["firstName"] = "Name is required.";
    }

    //email
    if (!email) {
      formIsValid = false;
      formErrors["emailId"] = "Email ID is required.";
    } else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      formIsValid = false;
      formErrors["emailId"] = "Invalid email id.";
    }

    if (!password) {
      formIsValid = false;
      formErrors["password"] = "Password is required.";
    }

    //Phone number    
    if (!mobileNo) {
      formIsValid = false;
      formErrors["contact"] = "Phone number is required.";
    }
    else {
      var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
      if (!mobPattern.test(mobileNo)) {
        formIsValid = false;
        formErrors["contact"] = "Invalid phone number.";
      }
    }

    //addressLine1
    if (!addressLine1) {
      formIsValid = false;
      formErrors["address1"] = "Address is required";
    }

    if (!city) {
      formIsValid = false;
      formErrors["city"] = "Please select your City";
    }

    if (!stateName) {
      formIsValid = false;
      formErrors["state"] = "Please select your State";
    }

    //Pincode   
    if (!pinCode) {
      formIsValid = false;
      formErrors["pincode"] = "Area pincode is required.";
    }
    else {
      var pinPattern = /^(\d{4}|\d{6})$/;
      if (!pinPattern.test(pinCode)) {
        formIsValid = false;
        formErrors["pincode"] = "Invalid pincode.";
      }
    }
    setFormErrors(formErrors);
    return formIsValid;
  }

  const onSignup = () => {
    console.log("here");
    //alert(name);
    const user = {
      name, //ES6 Object literal
      email,
      password,
      mobileNo,
      type: 'Customer',
      address: {
        addressLine1,
        addressLine2,
        state: stateName.label,
        city: city.label,
        pincode: pinCode,
      }
    };
    console.log(user);
    if (handleFormValidation()) {
      ApiService.addUser(user).then(response => {
        const { data } = response;  // const data = response.data or response["data"]
        alert("Hello registering of the new account is successful", data.name);
        props.history.push("/logIn");  //setting route path or browser url to /logIn to render Login Compoennt
      }).catch(error => {
        alert("error", error);
      });
    }
  }

  const onInputFocus = (event) => {
    let error = formErrors;
    error[event.target.name] = "";
    setFormErrors(error);
  }

  const selectStyles = {
    control: styles => ({ ...styles, padding: '0.6rem', paddingLeft: '0.3rem' }),
  };

  return (
    <>
      {(props.cart.user != null) ?
        <Redirect to={{ pathname: '/list' }} /> : ""
      }
      <div className="container signup-form">
        <div className="container-fluid ps-md-0">
          <div className="row g-0">
            <div
              className="d-none d-md-flex col-md-4 col-lg-6 bg-image"

            ></div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">Register Here!</h3>

                      {/* <!-- Sign Up Form --> */}
                      <div className="form-floating mb-3">
                        <input
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          onFocus={(e) => { onInputFocus(e) }}
                          value={name}
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          placeholder="name@example.com"
                        />
                        <div className="errorMsg">{formErrors["firstName"]}</div>
                        <label for="firstName">Name*</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          onFocus={(e) => { onInputFocus(e) }}
                          value={email}
                          type="email"
                          className="form-control"
                          id="emailId"
                          name="emailId"
                          placeholder="name@example.com"
                        />
                        <div className="errorMsg">{formErrors["emailId"]}</div>
                        <label for="emailId">Email*</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          onFocus={(e) => { onInputFocus(e) }}
                          value={password}
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          name="password"
                          placeholder="Password"
                        />
                        <div className="errorMsg">{formErrors["password"]}</div>
                        <label for="floatingPassword">Password*</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          onChange={(e) => {
                            setMobileNo(e.target.value);
                          }}
                          onFocus={(e) => { onInputFocus(e) }}
                          value={mobileNo}
                          type="text"
                          className="form-control"
                          id="contact"
                          name="contact"
                          placeholder="name@example.com"
                        />
                        <div className="errorMsg">{formErrors["contact"]}</div>
                        <label for="contact">Mobile Number*</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          onChange={(e) => {
                            setAddressLine1(e.target.value);
                          }}
                          onFocus={(e) => { onInputFocus(e) }}
                          value={addressLine1}
                          type="text"
                          className="form-control"
                          id="address1"
                          name="address1"
                          placeholder="name@example.com"
                        />
                        <div className="errorMsg">{formErrors["address1"]}</div>
                        <label for="address1">Address Line 1*</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          onChange={(e) => {
                            setAddressLine2(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          id="address2"
                          name="address2"
                          placeholder="name@example.com"
                        />
                        <label for="address2">Address Line 2</label>
                      </div>

                      <div className="form-floating mb-3">
                        <Select
                          onChange={(data) => setCity(data)}
                          value={city}
                          options={[{ label: 'Pune', value: 'pune' }, { label: 'Mumbai', value: 'mumbai' }]}
                          placeholder='Select City'
                          styles={selectStyles}
                        />
                        {
                          !city && <div className="errorMsg">{formErrors["city"]}</div>
                        }
                      </div>

                      <div className="form-floating mb-3">
                        <Select
                          onChange={(data) => setStateName(data)}
                          value={stateName}
                          options={[{ label: 'Maharashtra', value: 'mh' }]}
                          placeholder='Select State'
                          styles={selectStyles}
                        />
                        {
                          !stateName && <div className="errorMsg">{formErrors["state"]}</div>
                        }
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          onChange={(e) => {
                            setPinCode(e.target.value);
                          }}
                          onFocus={(e) => { onInputFocus(e) }}
                          value={pinCode}
                          type="text"
                          className="form-control"
                          id="pincode"
                          name="pincode"
                          placeholder="name@example.com"
                        />
                        <div className="errorMsg">{formErrors["pincode"]}</div>
                        <label for="pincode">Pincode*</label>
                      </div>

                      <div className="d-grid">
                        <button
                          onClick={onSignup}
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        // type="submit"
                        >
                          Sign up
                        </button>
                        <div className="text-center">
                          <h3 className="fs-6 lh-lg">
                            Already Registered ?{" "}
                            <Link to="/login">Login Here</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ cart }) => {
  return {
    cart
  }
}

export default connect(mapStateToProps)(SignUp)
