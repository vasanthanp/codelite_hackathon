package com.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:8081")
@RestController
public class UserController {
    @GetMapping("/users")
    public String isUserPrent() {
        return "Users";
    }
}
