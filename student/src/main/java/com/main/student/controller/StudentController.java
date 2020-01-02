package com.main.student.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import javax.validation.Valid;

import com.main.student.model.Student;
import com.main.student.service.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api")
public class StudentController {

    private StudentService studentService;

    @Autowired
    public void setStudentService(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("students-list")
    public List<Student> allstudents() {
        return studentService.findAll();
    }

    @GetMapping("students-list/{id}")
    @ResponseBody
    public Student studentsById(@PathVariable(value = "id") int id, Student student) {
        return studentService.findById(id);
    }

    @PostMapping("/create")
    //public String createNew(@ModelAttribute Student student) {
    public String createNew(@RequestBody Student student) {
        studentService.save(student);
        return "created";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteNew(@PathVariable("id") int id) {
        studentService.delete(id);
        return "deleted";
    }


    @PutMapping("/update/{id}")
    public Student updateOrig(@PathVariable(value = "id") int id, @Valid @RequestBody Student studentDetails) {
        
        Student student = studentService.findById(id);
        student.setName(studentDetails.getName());
        student.setEmail(studentDetails.getEmail());
        student.setBranch(studentDetails.getBranch());
        
        Student updatedStudent = studentService.update(student);

        return updatedStudent;

    }
    
}