package com.app;

//import java.util.Arrays;
//import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.dao.UserRepository;
//import com.app.pojo.Address;
//import com.app.pojo.User;


@SpringBootTest
class FoodDeliveryApplicationTests {

	@Autowired
	UserRepository userRepo;
	@Test
	void contextLoads() {
		
		
	}

}
