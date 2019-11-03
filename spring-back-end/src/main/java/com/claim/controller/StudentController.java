package com.claim.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.claim.entity.Student;
import com.claim.repository.StudentRepository;

@CrossOrigin
@RestController
public class StudentController {

	@Autowired
	StudentRepository studentRepo;
	
@RequestMapping(value ="submitStudentDetails" ,
consumes=MediaType.APPLICATION_JSON_VALUE, 
produces=MediaType.APPLICATION_JSON_VALUE,
method= RequestMethod.POST)


public void submitStudentDetails(@RequestBody Student student) {	
	
		studentRepo.save(student);
		
	}

//@RequestMapping(value="findByStudentEmail",
//produces=MediaType.APPLICATION_JSON_VALUE,
//method= RequestMethod.GET)

@GetMapping("findByEmail")
public ResponseEntity<Student> findByEmail(@Param("email") String email){
	Student student = studentRepo.findByEmail(email); 
	return new ResponseEntity<>(student,HttpStatus.OK);
}

@GetMapping("findByStudentId")
	public ResponseEntity<Student> findByStudentId(@Param("studentId") int studentId){
		Student student = studentRepo.findByStudentId(studentId);
		return new ResponseEntity<>(student,HttpStatus.OK);

}

@RequestMapping(value="findAll",
produces=MediaType.APPLICATION_JSON_VALUE,
method= RequestMethod.GET)

	public ResponseEntity <List <Student>> findAll(){
	List<Student> students = studentRepo.findAll();
		return new ResponseEntity<>(students,HttpStatus.OK);
}



@PostMapping(value="/login")
@ResponseBody
private ResponseEntity<Student>login(@RequestBody Student student) {
	Student databaseStudent = this.studentRepo.findByEmail(student.getEmail());
	 if (databaseStudent != null && student.getPassword().equals(databaseStudent.getPassword())) {
		return new ResponseEntity<>(databaseStudent, HttpStatus.OK);
	}else {
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}
}



}




