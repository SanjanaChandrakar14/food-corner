import React, { Component } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { setUserEmail,setUserDetails } from '../redux/actions/CartAction'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Login.css';
import ApiService from '../services/ApiService';
import axios from 'axios';
function ForgotPassword(props){
  
  const [email, setEmail] = useState("");
  const authenticateEmail =()=>
    {
        ApiService.checkEmail(email).then(res =>{
            console.log(res);
            alert("Verified");
            axios.post("http://localhost:3001/generate",{email:email,password:res.data.password}).then(response =>{
                let {data} = response;
                console.log(data);
                alert("Mail has been sent with password. Redirecting to LogIn page...");
                props.history.push("/logIn");
            }).catch(error => {alert(error);console.log("err")});
        }).catch(err =>{
            console.log(err)
        })
    
    }
      return (
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
                  <div id="error"></div>
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

                  </div>

                  <div className="d-grid">
                    <button
                      onClick={authenticateEmail}
                      className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                      // type="submit"
                    >
                      Confirm Email Id 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)
        
    
}
const mapStateToProps = ({cart}) =>{
  return{
    cart
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    setUserEmail,setUserDetails
},dispatch);
 }
export default connect(mapStateToProps,mapActionsToProps) (ForgotPassword);
