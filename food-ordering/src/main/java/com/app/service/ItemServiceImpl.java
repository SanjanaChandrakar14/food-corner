package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.UserHandlingException;
import com.app.dao.ItemRepository;
import com.app.pojo.Item;

@Service
@Transactional
public class ItemServiceImpl implements IItemService {

	@Autowired
	private ItemRepository itemRepo;
	@Override
	public List<Item> getAllItemList() {
		
		List<Item> item= itemRepo.findAll();
		if(item==null) {
			throw new UserHandlingException("No Item in Item List");
		}
		else {
			return item;
		}
	}
	@Override
	public Item addNewItem(Item item) {
		
		Item savedItem= itemRepo.save(item);
		if(savedItem!=null) {
			return savedItem;
		}
		else {
			throw new UserHandlingException("Please Enter a Valid Detail of Item");
		}
	}
	@Override
	public Item deleteItem(int itemId) {
		// TODO Auto-generated method stub
		Item item = itemRepo.findById(itemId).orElse(null);
		if(item!=null)
		{
			itemRepo.delete(item);
		}
		return item;
	}
	@Override
	public Item updatePrice(int id,int price) {
		Item item = itemRepo.findById(id).orElse(null);
		if(item!=null)
		{
			item.setPrice(price);
			Item updatedItem=itemRepo.save(item);
			return updatedItem;
		}
		throw new UserHandlingException("Please Enter a Valid Id");
	}
	@Override
	public Item updateQuantity(int id, int quant) {
		Item item = itemRepo.findById(id).orElse(null);
		if(item!=null)
		{
			item.setQuantity(quant);
			Item updatedItem=itemRepo.save(item);
			return updatedItem;
		}
		throw new UserHandlingException("Please Enter a Valid Item Id");
	}

}
