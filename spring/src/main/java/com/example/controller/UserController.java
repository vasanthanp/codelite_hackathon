package com.example.controller;

import java.util.List;

import com.example.model.AdminModel;
import com.example.model.BikeModel;
import com.example.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    protected UserService userService;

    @GetMapping("/user/dashboard")
    public List<AdminModel> getCompanies() {
        return userService.getCompanies();
    }

    @PostMapping("/user/bikes")
    public List<BikeModel> getCompanies(@RequestBody AdminModel admin) {
        return userService.getBikes(admin);
    }

}
