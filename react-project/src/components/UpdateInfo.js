import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { setUserDetails } from '../redux/actions/CartAction';

function UpdateInfo(props)
{
    const handleUpdate = () =>{
        let user = null;
        if(name !== props.cart.user.name)
        {
             user = props.cart.user;
            user.name = name;
        }
        if(email !== props.cart.user.email)
        {
            user = props.cart.user;
            user.email = email;
        }
        if(mobileNo!== props.cart.user.mobileNo)
        {
            user = props.cart.user;
            user.mobileNo = mobileNo;
        }
        props.setUserDetails(user);
        props.history.push("/userprofile")
    }
    const [name, setName] = useState(props.cart.user.name);
    const [email, setEmail] = useState(props.cart.user.email);
    const [mobileNo, setMobileNo] = useState(props.cart.user.mobileNo);
    const [address, setAddress] = useState(props.cart.user.address.addressLine1);

    const {addressLine1,addressLine2,city,state,pincode} = props.cart.user.address;
    let finalAddress = " ";
    finalAddress += (addressLine1 +" "+ addressLine2+" "+city +" "+state + " " +pincode);
    return( <div>
        <div style={{borderStyle:"solid",borderBlockColor:"red",padding:"10px",marginTop:"20px"}}>
<h3 style={{alignContent:"center"}}>Update User Profile -:</h3>
<form class="form-inline">
 <div class="form-group mx-sm-3 mb-2">
     <label for="staticEmail2" class="sr-only">Name</label>
     <input type="text" style={{width:"75per",height:"10per"}} class="form-control" id="staticEmail2" placeholder={props.cart.user.name} onChange={(e)=>setName(e.target.value)}/>

 </div>
 <div class="form-group mx-sm-3 mb-2">
     <label for="inputPassword2" class="sr-only">Email</label>
     <input type="text" class="form-control" id="inputPassword2" placeholder={props.cart.user.email} onChange={(e)=>setEmail(e.target.value)} /> 
    
 </div>
 <div class="form-group mx-sm-3 mb-2">
     <label for="inputPassword2" class="sr-only">Mobile No</label>
     <input type="text" class="form-control" id="inputPassword2" placeorder={props.cart.user.mobileNo} onChange={(e)=>setMobileNo(e.target.value)} /> 
    
 </div>
 <div class="form-group mx-sm-3 mb-2">
     <label for="inputPassword2" class="sr-only">Address</label>
     <input type="text" class="form-control" id="inputPassword2" placeorder={finalAddress} onChange={(e)=>setAddress(e.target.value)}/> 
 </div>
 <button className="btn btn-outline-success" onClick={handleUpdate}> Update Info</button>
 </form>
</div>
</div>)
}

const mapStateToProps = ({cart}) =>{
    return{
      cart
    }
  }

  const mapActionsToProps =(dispatch) =>{
    return bindActionCreators({
        setUserDetails
    },dispatch);
  
  }
export default connect(mapStateToProps, mapActionsToProps)(UpdateInfo)
