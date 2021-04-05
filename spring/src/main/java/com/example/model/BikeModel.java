package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Bike")
public class BikeModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "adminID")
    private Long adminID;

    @Column(name = "bike_model")
    private String bikeModel;
    @Column(name = "status")
    private String status;
    @Column(name = "price")
    private String price;
    @Column(name = "type")
    private String type;

    public BikeModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAdminID() {
        return adminID;
    }

    public void setAdminID(Long adminID) {
        this.adminID = adminID;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBikeModel() {
        return bikeModel;
    }

    public void setBikeModel(String bikeModel) {
        this.bikeModel = bikeModel;
    }

    public BikeModel(Long id, Long adminID, String bikeModel, String status, String price, String type) {
        this.id = id;
        // this.bikeID = bikeID;
        this.adminID = adminID;
        this.bikeModel = bikeModel;
        this.status = status;
        this.price = price;
        this.type = type;
    }

}