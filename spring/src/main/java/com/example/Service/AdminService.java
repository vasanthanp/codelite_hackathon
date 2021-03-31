package com.example.service;

import com.example.model.AdminModel;
import com.example.repository.AdminRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;

    public AdminModel editAdmin(AdminModel data) {
        AdminModel admin = adminRepository.findById(data.getId()).get();
        admin.setEmail(data.getEmail());
        admin.setPassword(data.getPassword());
        admin.setMobileNumber(data.getMobileNumber());
        admin.setSellerName(data.getSellerName());
        admin.setCompanyName(data.getCompanyName());
        admin.setCompanyAddress(data.getCompanyAddress());
        admin = adminRepository.save(data);
        return admin;
    }

}
