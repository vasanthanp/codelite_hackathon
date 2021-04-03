package com.example.controller;

import java.util.List;

import com.example.model.AdminModel;
import com.example.model.BookingsModel;
import com.example.model.UserModel;
import com.example.service.SuperAdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SuperAdminController {
    
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
    public List<BookingsModel> getAllBookings() {
        return superAdminService.getAllBookings();
    }

}
