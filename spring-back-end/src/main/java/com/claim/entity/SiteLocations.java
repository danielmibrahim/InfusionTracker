package com.claim.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="siteLocations")
public class SiteLocations {
	
	
	@Column(name="shape")
	private String shape;
	
	@Column(name="xCoord")
	private long xCoord;
	
	@Column(name="yCoord")
	private long yCoord;
	
	@Column(name="fillColor")
	private String fillColor;

	@Column(name="dateStarted")
	private Date dateStarted;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="Id")
	private int Id;
	
	@OneToOne(fetch = FetchType.LAZY)
	private Student siteStudent;

	public void setSiteStudent(Student siteStudent) {
		this.siteStudent = siteStudent;
	}

	public String getShape() {
		return shape;
	}

	public void setShape(String shape) {
		this.shape = shape;
	}

	public long getxCoord() {
		return xCoord;
	}

	public void setxCoord(long xCoord) {
		this.xCoord = xCoord;
	}

	public long getyCoord() {
		return yCoord;
	}

	public void setyCoord(long yCoord) {
		this.yCoord = yCoord;
	}

	public String getFillColor() {
		return fillColor;
	}

	public void setFillColor(String fillColor) {
		this.fillColor = fillColor;
	}

	

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}
	

	public Date getDateStarted() {
		return dateStarted;
	}

	public void setDateStarted(Date dateStarted) {
		this.dateStarted = dateStarted;
	}

	public SiteLocations(){}
	
	public SiteLocations(String shape, long xCoord, long yCoord, String fillColor, Date dateStarted, int id,
			Student siteStudent) {
		this.shape = shape;
		this.xCoord = xCoord;
		this.yCoord = yCoord;
		this.fillColor = fillColor;
		this.dateStarted = dateStarted;
		Id = id;
		this.siteStudent = siteStudent;
	}



	



	
	
}
