package com.app.service;

import java.util.List;


import com.app.pojo.Order;
import com.app.pojo.User;

public interface IUserService 
{

	List<User> getAllUsers();
	
	User signUpUser(User user);
	
	User authenticateUser(String email,String password);
	
	User placeOrder(User user, Order order);
	
	User getUserByID(int id);
	
	User deleteByEmailAndPassword(String email,String password);
	
	User deleteById(int userId);
	
	User checkUserByEmail(String email);
}
