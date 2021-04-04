package com.example.controller;

import java.util.List;

import com.example.model.AdminModel;
import com.example.model.UserModel;
import com.example.service.SuperAdminService;
import com.example.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:8081")
@RestController
public class SuperAdminController {
    @Autowired
    protected AdminService adminService;
    @Autowired
    protected SuperAdminService superAdminService;

    @PostMapping("/super/deleteAdmin")    
    public List<AdminModel> deleteAdmin(@RequestBody AdminModel admin) {
        return superAdminService.deleteAdmin(admin.getId());
    }

    @PostMapping("/super/deleteUser")    
    public List<UserModel> deleteUser(@RequestBody UserModel user) {
        return superAdminService.deleteUser(user.getId()); 
    }

    @GetMapping("/super/allBookings")
    public List<List<Object>> getAllBookings() {
        return superAdminService.getAllBookings();
    }
    @GetMapping("/super/dashboard")
    public List<AdminModel> getAllAdmins(){
        return adminService.getAllAdmins();
    }
}
