import React from 'react'
import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//app
import { setUserEmail, setUserDetails } from '../redux/actions/CartAction'
import ApiService from '../services/ApiService';

//style
import './Login.css';

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const authenticateUser = () => {
    ApiService.authenticateUser(email, password).then(response => {
      const { data } = response;
      console.log(response);
      props.setUserEmail(data.email);
      props.setUserDetails(data);

      console.log(data);
      if (data === "") {
        setErrorMsg("Invalid Email or Password")
      }
      props.history.push("/list");
    }).catch(err => {
      setErrorMsg("Invalid Email or Password")
      //document.getElementById("error").innerText = "Invalid Email And Password";
      console.log(err.toString());
    })

  }

  return (
    <>
      {(props.cart.user != null) ?
        <Redirect to={{ pathname: '/list' }} /> : ""
      }
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
                    <div id="error" className="errorMsg">{errorMsg}</div>
                    <h3 className="login-heading mb-4">Welcome back!</h3>

                    {/* <!-- Sign In Form --> */}
                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value)
                        }}
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>


                    <div className="d-grid">
                      <button
                        onClick={authenticateUser}
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                      // type="submit"
                      >
                        Sign in
                      </button>
                      <div className="text-center">
                        <a className="small" href="/login">
                          Forgot password?
                        </a>
                        <h3 className="fs-6 lh-lg">
                          New User ? <Link to="/signup">Register Here</Link>
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
    </>
  )

}
const mapStateToProps = ({ cart }) => {
  return {
    cart
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    setUserEmail, setUserDetails
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Login);
