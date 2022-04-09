package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

//import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.app.custom_exceptions.UserHandlingException;
import com.app.dao.OrderRepository;
import com.app.dao.UserRepository;
//import com.app.pojo.Item;
import com.app.pojo.Order;
import com.app.pojo.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	
	
	@Autowired
	UserRepository user;
	@Autowired
	OrderRepository orderRepo;
	
	@Override
	public List<User> getAllUsers() {

		return user.findAll();
	}
	@Override
	public User signUpUser(User userNewlyCreated) {
		
		User u= user.save(userNewlyCreated);
		if(u!=null) {
			return u;
		}
		else {
			throw new UserHandlingException("Enter a valid Details Of user !!!");
		}
	}
	@Override
	public User authenticateUser(String email,String password) {
		
		System.out.println("Email check"+ email);
		System.out.println("Password Check"+password);
		 User u=user.findByEmailAndPassword(email.trim(),password.trim());
		if(u!=null) {
			return u;
		}
		else {
			throw new UserHandlingException("Enter a valid Email and Password !!!");
		}
		
	}
	@Override
	public User placeOrder(User userReceived, Order order) {
		// TODO Auto-generated method stub
		
		//orderRepo.save(order);
		System.out.println("userReceived"+userReceived.getId());
		User u = user.getById(userReceived.getId());
		List<Order> ls = u.getOrder();
		ls.add(order);
		u.setOrder(ls);
		return user.save(u);
	}
	@Override
	public User getUserByID(int sid) {
		return user.findById(sid).orElseThrow(() -> new UserHandlingException("Invalid User ID...!!!"));
	}
	@Override
	public User deleteByEmailAndPassword(String email, String password) {
		System.out.println("Email check"+ email);
		System.out.println("Password Check"+password);
		 User u=user.findByEmailAndPassword(email.trim(),password.trim());
		if(u!=null) {
			user.delete(u);
			return u;
		}
		else {
			throw new UserHandlingException("Enter a valid Email and Password !!!");
		}
	
	}
	@Override
	public User deleteById(int userId) {
		User u=getUserByID(userId);
		if(u!=null) {
			user.delete(u);
			return u;
		}
		else {
			throw new UserHandlingException("Enter a valid Id");
		}
	}
	@Override
	public User checkUserByEmail(String email) {
		List<User> userList=user.findAll();
		for(User u:userList) {
			if(u.getEmail().equals(email)) {
				return u;
			}
		}
		throw new UserHandlingException("Email Not Found !!!");
		
	}
}
	
		
	


