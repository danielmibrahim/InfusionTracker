package com.claim.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.claim.entity.Student;
@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{

	@Query("Select S from Student S where S.email =:email")
	Student findByEmail(@Param("email") String email);
	
////	@Query("Select S from Student S where S.email =:email ")
////	Student findStudentByEmail(@Param("email") String email);
//	//SAME
//	

//	Student findByEmail(String email);
//	
	Student findByStudentId(int studentId);
	
	@Query ("Select S from Student S where S.email=:email AND S.password=:password")
			Student login(String email, String password);

	

	
	
	
	
	
	
	
	
	
	
}
