package com.claim.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.claim.entity.SiteLocations;
import com.claim.entity.Student;

public interface SiteRepository extends JpaRepository <SiteLocations, Integer>{
	
//	@Query("Select S from SiteLocations S where S.siteStudent =:siteStudent")
	List<SiteLocations> findBySiteStudent(Student siteStudent);
	
}
