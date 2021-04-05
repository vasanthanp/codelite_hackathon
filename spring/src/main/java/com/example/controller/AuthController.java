package com.example.controller;

import com.example.model.AdminModel;
import com.example.model.LoginModel;
import com.example.model.SuperAdminModel;
import com.example.model.UserModel;
import com.example.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*", allowedHeaders = "*")
@RestController
public class AuthController {
    @Autowired
    protected AuthService authservice;

    @PostMapping("/user/login")
    public boolean isUserPresent(@RequestBody LoginModel data) {
        return authservice.isUserPresent(data);
    }

    @PostMapping("/admin/login")
    public boolean isAdminPresent(@RequestBody LoginModel data) {
        return authservice.isAdminPresent(data);
    }

    @PostMapping("/super/login")
    public boolean isSuperAdminPresent(@RequestBody SuperAdminModel data) {
        return authservice.isSuperAdminPresent(data);
    }

    @PostMapping("/user/signup")
    public UserModel saveUser(@RequestBody UserModel user) {
        return authservice.saveUser(user);
    }

    @PostMapping("/admin/signup")
    public AdminModel saveAdmin(@RequestBody AdminModel admin) {
        return authservice.saveAdmin(admin);
    }

}
