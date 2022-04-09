package com.app.dto;

public class RequestQuant {
private int id;
private int quantity;
public RequestQuant(int id, int quantity) {
	super();
	this.id = id;
	this.quantity = quantity;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public int getQuantity() {
	return quantity;
}
public void setQuantity(int quantity) {
	this.quantity = quantity;
}
@Override
public String toString() {
	return "UpdateQuant [id=" + id + ", quantity=" + quantity + "]";
}

}
