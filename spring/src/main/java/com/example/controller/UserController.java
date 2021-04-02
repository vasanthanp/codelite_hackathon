package com.example.controller;

import java.util.List;

import com.example.model.AdminModel;
import com.example.model.BikeModel;
import com.example.model.BookingsModel;
import com.example.model.LoginModel;
import com.example.model.UserModel;
import com.example.service.AdminService;
import com.example.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:8081")
@RestController
public class UserController {

    @Autowired
    protected UserService userService;
    @Autowired
    protected AdminService adminService;

    @GetMapping("/user/dashboard")
    public List<AdminModel> getCompanies() {
        return userService.getCompanies();
    }

    @PostMapping("/user/profile")
    public UserModel findUserByEmail(@RequestBody LoginModel email) {
        System.out.println("At line 37 " + email);
        return userService.findUserByEmail(email);
    }

    @PostMapping("/user/bikeDetails")
    public BikeModel getBikeDetails(@RequestBody BikeModel bike) {
        return userService.getBikeDetails(bike);
    }

    @PostMapping("/user/bikes")
    public List<BikeModel> getCompanies(@RequestBody AdminModel admin) {
        return userService.getBikes(admin);
    }

    @PutMapping("/user/edit")
    public UserModel editAdmin(@RequestBody UserModel user) {
        return userService.editUser(user);
    }

    @PostMapping("/user/bookBike")
    public BookingsModel bookBike(@RequestBody BookingsModel booking) {
        return userService.createBooking(booking);
    }

    @PostMapping("/user/bookings")
    public List<BookingsModel> userBookings(@RequestBody LoginModel user) {
        return userService.getBookings(user);
    }

    @GetMapping("user/companyDetail/{adminId}")
    public AdminModel getAdminById(@PathVariable Long adminId) {
        return adminService.getAdminById(adminId);
    }

}
