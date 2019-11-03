package com.claim.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.claim.entity.SiteDto;
import com.claim.entity.SiteLocations;
import com.claim.entity.Student;
import com.claim.repository.SiteRepository;
import com.claim.repository.StudentRepository;

@CrossOrigin
@RestController
@RequestMapping("/sites")
public class SiteController {

	@Autowired
	SiteRepository siterepo;
	@Autowired
	StudentRepository studentRepository;
	
	@PostMapping(value ="/add-site/{email}") //Add user ID to the path and read through path variable
	public void submitSiteLocation(@PathVariable("email") String email, @RequestBody SiteDto siteDto) {
			//TODO: retrieve the user using the user id
			// set the user in the Site Location
			
			
			Student siteStudent = studentRepository.findByEmail(email); 
			if(siteStudent != null) {
				SiteLocations siteLocations = new SiteLocations( siteDto.getShape(),  siteDto.getxCoord(),  siteDto.getyCoord(),  
										siteDto.getFillColor(),  new Date(), siteStudent.getStudentId(), siteStudent);
				siterepo.save(siteLocations);
			}
			
			
	}
	
	@GetMapping(value ="/findSites/{email}") //Add user ID to the path and read through path variable
	public List<SiteLocations> findSites(@PathVariable("email") String email) {
		
			//TODO: make a call to the site repo and retrieve the list of locations
		Student siteStudent = studentRepository.findByEmail(email); 
			List<SiteLocations> siteLocations = siterepo.findBySiteStudent(siteStudent);
		

		return siteLocations;
		
	}

	
}
