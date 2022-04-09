package com.app.pojo;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name="user_table")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
//@ToString
public class User extends BaseEntity {
	
	@Column
	private String name; 
	
	@Column
	private String email;
	
	@Column
	private String password;
	
	@Column
	private long mobileNo;
	
	@Column
	private String type;
	
	@OneToOne(cascade =CascadeType.ALL)
	@JsonIgnoreProperties("user")
	Address address;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	private List<Order> order;

//	public Object getEmail() {
//		// TODO Auto-generated method stub
//		return email;
//	}
//
//	public String getId() {
//		// TODO Auto-generated method stub
//		return "qwerty";
//	}
//
//	public void setOrder(List<Order> ls) {
//		// TODO Auto-generated method stub
//		
//	}
//
//	public List<Order> getOrder() {
//		// TODO Auto-generated method stub
//		return order;
//	}
//	
}
