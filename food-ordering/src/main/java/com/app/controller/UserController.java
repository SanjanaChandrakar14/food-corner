package com.app.controller;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
//import com.app.pojo.Item;
import com.app.pojo.Order;
import com.app.pojo.User;
import com.app.service.IUserService; 
@RestController
@RequestMapping("/users")
@CrossOrigin(origins="http://localhost:3001")
public class UserController {
	
	@Autowired
	IUserService user;
	//get All user detail from user_table
	@GetMapping
	public List<User> getAllUser()
	{
		return user.getAllUsers();
	}
	//Adding new user detail in user_table
	@PostMapping("/adduser")
	public ResponseEntity<User> signUpUser(@RequestBody User userNew)
	{
		System.out.println("Here "+userNew);
		return new ResponseEntity<>(user.signUpUser(userNew), HttpStatus.CREATED);//Exception not work
	}
	//check the authenticate user from user_table
	@PostMapping("/authenticate")
	public ResponseEntity<User> authenticateUser(@RequestBody @Valid LoginRequest request)
	{
		System.out.println("Here "+request.getEmail());
		System.out.println("Here "+request.getPassword());
		System.out.println("Here "+request);
		return new ResponseEntity<>(user.authenticateUser(request.getEmail(),request.getPassword()),HttpStatus.OK);//exception work
	}
	@PostMapping("/placeorder/{sid}")//placeorder/user_id
	@Transactional
	public User placeOrder(@PathVariable int sid,@RequestBody Order order)
	{
		//System.out.println(obj.toJSONString());
		
		System.out.println("Here User "+ sid);
		System.out.println("Here Order "+order);
		User u = user.getUserByID(sid);
		//System.out.println(u.getOrder());
		//return null;
		return user.placeOrder(u, order);
	}
	@DeleteMapping("/deleteUser")
	public List<User>  deleteByEmailAndPassword(@RequestBody @Valid LoginRequest request)
	{
		if(user.deleteByEmailAndPassword(request.getEmail(),request.getPassword())!=null)
		{
			return user.getAllUsers();
		}
		return null;
	}
   @DeleteMapping("deleteById/{userId}")
   public List<User> deleteById(@PathVariable int userId) {
	   System.out.println("Here User "+ userId);
      if(user.deleteById(userId)!=null) {
    	  return user.getAllUsers();
      }
	return null;
   }
   @PostMapping("/checkUser/{email}")
   public ResponseEntity<User> checkUserByEmail(@PathVariable String email) {
//	if(user.checkUserByEmail(email)!=null) {
//		return user.checkUserByEmail(email);
//	}
//	return null;
	   return new ResponseEntity<>(user.checkUserByEmail(email),HttpStatus.OK);   
}
}
