package com.claim.entity;

import java.util.Date;

import javax.persistence.Column;

public class SiteDto {

	private String shape;
	private Long xCoord;
	private Long yCoord;
	private String fillColor;
	private Date dateStarted;
	
	public String getShape() {
		return shape;
	}
	public void setShape(String shape) {
		this.shape = shape;
	}
	public Long getxCoord() {
		return xCoord;
	}
	public void setxCoord(Long xCoord) {
		this.xCoord = xCoord;
	}
	public Long getyCoord() {
		return yCoord;
	}
	public void setyCoord(Long yCoord) {
		this.yCoord = yCoord;
	}
	public String getFillColor() {
		return fillColor;
	}
	public void setFillColor(String fillColor) {
		this.fillColor = fillColor;
	}
	public Date getDateStarted() {
		return dateStarted;
	}
	public void setDateStarted(Date dateStarted) {
		this.dateStarted = dateStarted;
	}
	
	
}
