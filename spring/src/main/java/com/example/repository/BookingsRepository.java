package com.example.repository;

import com.example.model.BookingsModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingsRepository extends JpaRepository<BookingsModel, Long>{
    
}
