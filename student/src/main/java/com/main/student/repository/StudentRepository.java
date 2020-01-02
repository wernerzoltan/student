package com.main.student.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

import com.main.student.model.Student;

@Repository  
public interface  StudentRepository extends CrudRepository<Student, Long> {

    List<Student> findAll();

    Student findById(int id);

}