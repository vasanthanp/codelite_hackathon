package com.example.repository;

import com.example.model.BikeModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BikeRepository extends JpaRepository<BikeModel, Long> {
    BikeModel findBybikeID(String bikeID);
}
