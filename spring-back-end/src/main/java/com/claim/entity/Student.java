package com.claim.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//import org.apache.tomcat.jni.Address;
@Entity
@Table(name="student")
public class Student {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int studentId;

@Column(name="first_name")	
private String firstName;

@Column(name="last_name")	
private String lastName;


@Column(name="email", unique = true)
private String email;

@Column(name="age")
private int age;

@Column(name="telephone")
private String telephone;

@Column(name="password")
private String password;

@Column(name="name")
private String name;

@Column(name="shape")
private String shape;

@Column(name="coords")
private String coords;

@Column(name="fillColor")
private String fillColor;

@Column(name="preFillColor")
private String preFillColor;





public Student(String firstName, String lastName, String email, int age, String telephone,
		String password) {
	super();
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.age = age;
	this.telephone = telephone;
	this.password = password;
	
}




Student(){
	
}




public String getName() {
	return name;
}




public void setName(String name) {
	this.name = name;
}

public String getShape() {
	return shape;
}

public int getStudentId() {
	return studentId;
}

public void setStudentId(int studentId) {
	this.studentId = studentId;
}

public String getFirstName() {
	return firstName;
}

public void setFirstName(String firstName) {
	this.firstName = firstName;
}

public String getLastName() {
	return lastName;
}

public void setLastName(String lastName) {
	this.lastName = lastName;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public int getAge() {
	return age;
}

public void setAge(int age) {
	this.age = age;
}

public String getTelephone() {
	return telephone;
}

public void setTelephone(String telephone) {
	this.telephone = telephone;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

//public Address getAddress() {
//	return address;
//}
//
//public void setAddress(Address address) {
//	this.address = address;
//}
	
	
}
