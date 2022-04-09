package com.app.service;

import java.util.List;

import com.app.pojo.Item;

public interface IItemService {

	List<Item> getAllItemList();
	Item addNewItem(Item item);
	Item deleteItem(int itemId);
	Item updatePrice(int id,int price);
	Item updateQuantity(int id,int quant);
}
