//import { color } from '@mui/system'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component {
    checkForUserLogIn =()=>{
        if(this.props.cart.user === null){
            return(
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav">
                  <li class="nav-item">
                      <Link class="nav-link" to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                      <Link class="nav-link" to="/about">About</Link>
                  </li>
                  <li class="nav-item">
                      <Link class="nav-link" to="/contact">Contact</Link>
                  </li>
                  <li class="nav-item">
                      <Link class="nav-link" to="/login">Login/SignUp</Link>
                  </li>
                     
                  </ul>
                </div>) 
        }
        else{
            return(<ul class="navbar-nav  auto-ml">
            <li class="nav-item">
            <a class="nav-link" href="/">
               <strong style={{color:"black"}}> Welcome {this.props.cart.user.name}</strong>
            </a>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/userprofile">
                   Profile
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/list">
                   Cart
                </Link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/logout">
                   logout
                </a>
            </li>

            
        </ul>)
        }
    }
    render() {
        
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="/">e-FoodCorner</a>
                {this.checkForUserLogIn()}
                </nav>
                </div>
        )
    }
}

export default Navbar


