package com.app.controller;

import java.util.List;

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

//import com.app.dto.LoginRequest;
import com.app.dto.RequestPrice;
import com.app.dto.RequestQuant;
import com.app.pojo.Item;
import com.app.service.IItemService;

@RestController
@RequestMapping("/item")
@CrossOrigin(origins="http://localhost:3001")
public class ItemController {
	
	@Autowired
	IItemService service;

	@GetMapping
	public ResponseEntity<?> getAllItemList()
	{
		return new ResponseEntity<>(service.getAllItemList(), HttpStatus.OK);//Exception Work
	}
	
	@PostMapping("/additem")
	public ResponseEntity<?> addNewItem(@RequestBody Item item)
	{
		
			return new ResponseEntity<>(service.addNewItem(item), HttpStatus.OK);//Exception Not Work
		
	}
	@DeleteMapping("/deleteitem/{id}")
	public List<Item>  deleteItem(@PathVariable int id)
	{
		if(service.deleteItem(id)!=null)
		{
			return service.getAllItemList();
		}
		return null;
	}
	@PostMapping("/updatequant")
	public ResponseEntity<Item> updateQuantity(@RequestBody @Valid RequestQuant request)
	{
		System.out.println("Request id "+request.getId());
		System.out.println("Request Quantity "+request.getQuantity());
		return new ResponseEntity<>(service.updateQuantity(request.getId(),request.getQuantity()),HttpStatus.OK);//exception work
	}
	
	@PostMapping("/updateprice")
	public ResponseEntity<Item> updatePrice(@RequestBody @Valid RequestPrice request)
	{
		System.out.println("Request id "+request.getId());
		System.out.println("Request Price "+request.getPrice());
		return new ResponseEntity<>(service.updatePrice(request.getId(),request.getPrice()),HttpStatus.OK);//exception work
	}
	
}
