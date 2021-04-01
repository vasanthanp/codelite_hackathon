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
    @Column(name = "bikeID")
    private String bikeID;
    @Column(name = "bikeNo")
    private String bikeNo;

    @Column(name = "adminID")
    private String adminID;

    @Column(name = "status")
    private String status;
    @Column(name = "price")
    private String price;
    @Column(name = "type")
    private String type;

    public BikeModel(Long id, String bikeID, String bikeNo, String adminID, String status, String price, String type) {
        this.id = id;
        this.bikeID = bikeID;
        this.bikeNo = bikeNo;
        this.adminID = adminID;
        this.status = status;
        this.price = price;
        this.type = type;
    }

    public BikeModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBikeID() {
        return bikeID;
    }

    public void setBikeID(String bikeID) {
        this.bikeID = bikeID;
    }

    public String getBikeNo() {
        return bikeNo;
    }

    public void setBikeNo(String bikeNo) {
        this.bikeNo = bikeNo;
    }

    public String getAdminID() {
        return adminID;
    }

    public void setAdminID(String adminID) {
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

}