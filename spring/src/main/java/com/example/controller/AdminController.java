package com.example.controller;

import java.util.List;

import com.example.model.AdminModel;
import com.example.model.BikeModel;
import com.example.model.BookingsModel;
import com.example.model.LoginModel;
import com.example.service.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin("http://localhost:8081")
@RestController
public class AdminController {
    @Autowired
    protected AdminService adminService;

    @PostMapping("/admin/dashboard")
    public List<BikeModel> getAdminBikes(@RequestBody LoginModel admin) {
        return adminService.getAdminBikes(admin.getEmail());
    }

    @PostMapping("/admin/profile")
    public AdminModel getAdmin(@RequestBody LoginModel admin) {
        return adminService.getAdminDetails(admin.getEmail());
    }

    @PutMapping("/admin/edit")
    public AdminModel editAdmin(@RequestBody AdminModel admin) {
        return adminService.editAdmin(admin);
    }

    @PostMapping("/admin/bookings")
    public List<BookingsModel> userBookings(@RequestBody AdminModel user) {
        return adminService.getBookings(user);
    }
}
