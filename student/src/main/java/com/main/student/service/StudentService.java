package com.main.student.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.student.repository.StudentRepository;

import java.util.List;

import com.main.student.model.Student;

@Service  
public class StudentService {

    private StudentRepository studentRepository;

    @Autowired
	public void setStudentRepository(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
}

    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    public Student findById(int id) {
        return studentRepository.findById(id);
    }

    public void save(Student student) {
        studentRepository.save(student);
    }

    public Student update(Student student) {
        return studentRepository.save(student);
      }
     
    public void delete(int id) {
        Student student = findById(id);
        studentRepository.delete(student);
    }

    
}