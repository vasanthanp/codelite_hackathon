package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Admin")
public class AdminModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "mobileNumber")
    private String mobileNumber;
    @Column(name = "sellerName")
    private String sellerName;
    @Column(name = "userRole")
    private String userRole;
    @Column(name = "companyName")
    private String companyName;
    @Column(name = "companyImageURL")
    private String companyImageURL;
    @Column(name = "companyAddress")
    private String companyAddress;
    @Column(name = "earnings", columnDefinition = "integer default 0")
    private int earnings;

    public AdminModel() {
    }

    public AdminModel(String email, String password, String mobileNumber, String sellerName, String userRole,
            String companyName, String companyImageURL, String companyAddress, int earnings) {
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.sellerName = sellerName;
        this.userRole = userRole;
        this.companyName = companyName;
        this.companyImageURL = companyImageURL;
        this.companyAddress = companyAddress;
        this.earnings = earnings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyImageURL() {
        return companyImageURL;
    }

    public void setCompanyImageURL(String companyImageURL) {
        this.companyImageURL = companyImageURL;
    }

    public String getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
    }

    public int getEarnings() {
        return earnings;
    }

    public void setEarnings(int earnings) {
        this.earnings = earnings;
    }

}
