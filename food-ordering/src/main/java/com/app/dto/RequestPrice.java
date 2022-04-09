package com.app.dto;

public class RequestPrice {
private int id;
private int price;

public RequestPrice(int id, int price) {
	super();
	this.id = id;
	this.price = price;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public int getPrice() {
	return price;
}
public void setPrice(int price) {
	this.price = price;
}
@Override
public String toString() {
	return "RequestPrice [id=" + id + ", price=" + price + "]";
}

}
