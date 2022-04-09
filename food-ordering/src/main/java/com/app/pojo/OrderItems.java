package com.app.pojo;


import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="order_items_table")
public class OrderItems extends BaseEntity{

	@Column
	private String name;
	
	@Column
	private  int quantity;
	
}
