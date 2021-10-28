package com.example.demo.model;

import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="favorites")
public class Movies {
	@Id
	//@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String title;
    private int release_date;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Movies(int id, String title, int release_date) {
		super();
		this.id = id;
		this.title = title;
		this.release_date = release_date;
	}
	public Movies() {
		
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getRelease_date() {
		return release_date;
	}
	public void setRelease_date(int release_date) {
		this.release_date = release_date;
	}
      
	
}
