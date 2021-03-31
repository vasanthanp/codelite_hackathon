package com.example.controller;

import com.example.model.AdminModel;
import com.example.service.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {
    @Autowired
    protected AdminService adminService;

    @PutMapping("/admin/edit")
    public AdminModel editAdmin(@RequestBody AdminModel admin) {
        return adminService.editAdmin(admin);
    }
}
