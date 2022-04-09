//import { ClassNames } from '@emotion/react';
//import { border } from '@mui/system';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
//import {bindActionCreators} from 'redux';
import "./layout/table.css";
 class UserProfile extends Component {


  

    handleEdit =()=>{
        this.props.history.push("/updateinfo");
    }

    getList = () =>{
        return this.props.cart.user.order.map((order) =>{return <><orderDisplay order={order}> </orderDisplay></>})
    }
    checkUserLogIn = (cart) =>{
        if(this.props.cart.user != null )
        {
            const orderList = cart.user.order.map((order)=>{<tr><td>{order.id}</td><td>{order.orderTimeStamp}</td><td>{order.price}</td></tr>});
            const {addressLine1,addressLine2,city,state,pincode} = this.props.cart.user.address;
            let finalAddress = " ";
            finalAddress += (addressLine1 +" "+ addressLine2+" "+city +" "+state + " " +pincode);
            let ol = this.props.cart.user.order;
            let finalOl =ol.map((o)=> <div style={{borderStyle:"solid",padding:"10px",marginTop:"20px"} } className="card"><div>Order Id:{o.id}</div><div>Ordered On:{o.orderTimeStamp}</div><div>{o.orderItems.map(o =><div>Item:{o.name} Quantity:{o.quantity}</div>)} </div><div>Price:{o.price}</div></div>)

            return(
        <div style={{borderStyle:"solid",borderBlockColor:"red",padding:"10px",marginTop:"20px"}}>
            <h3 style={{alignContent:"center"}}>User Profile -:</h3>
            <form class="form-inline">
                <div class="form-group mx-sm-3 mb-2">
                    <label for="staticEmail2" class="sr-only">Name</label>
                    <input type="text" style={{width:"75per",height:"10per"}} readonly class="form-control" id="staticEmail2" value={this.props.cart.user.name} readOnly/>
                    
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only">Email</label>
                    <input type="text" class="form-control" id="inputPassword2" value={this.props.cart.user.email} readOnly/> 
                    
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only">Mobile No</label>
                    <input type="text" class="form-control" id="inputPassword2" value={this.props.cart.user.mobileNo} readOnly/> 
                    
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only">Address</label>
                    <input type="text" class="form-control" id="inputPassword2" value={finalAddress} readOnly/> 
                </div>
                <button className="btn btn-outline-success" onClick={this.handleEdit}> Edit Information</button>
                <h3 style={{alignContent:"center"}}>Previous Order Details -:</h3>
                {
                    finalOl
                }

                </form>
            
                </div>
            );
        }
        else{
            return (<></>)
        }

    }
   
    render(){ 
        if(this.props.cart.user === null)
        {
            return <Redirect to={{pathname: '/'}} />
        }
            return (<>
            {this.checkUserLogIn(this.props.cart)}
            </>)
        
    }
}

const mapStateToProps = ({cart}) =>{
    return{
      cart
    }
  }

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)

/*
<><h3>USER PROFILE</h3>
            <h3>User Information:</h3>
            <table>
                <tr><td>Name :</td><td>{this.props.cart.user.name}</td></tr>
                <tr><td>Email :</td><td>{this.props.cart.user.email}</td></tr>
                <tr><td>Mobile No :</td><td>{this.props.cart.user.mobileNo}</td></tr>
                <tr><td>Address:{this.props.cart.user.address.addressLine1} , {this.props.cart.user.address.addressLine1} ,{this.props.cart.user.address.city},{this.props.cart.user.address.state},{this.props.cart.user.address.pincode} </td></tr>
            </table>
            <h1>
                <table>
                   
                        {orderList}

                </table>
            </h1>
            </>
 */