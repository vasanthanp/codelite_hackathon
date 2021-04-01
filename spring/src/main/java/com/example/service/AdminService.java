package com.example.service;

import java.util.ArrayList;
import java.util.List;

import com.example.model.AdminModel;
import com.example.model.BikeModel;
import com.example.model.BookingsModel;
import com.example.repository.AdminRepository;
import com.example.repository.BikeRepository;
import com.example.repository.BookingsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;

    @Autowired
    BikeRepository bikeRepository;

    @Autowired
    BookingsRepository bookingsRepository;

    public AdminModel getAdmin(String email) {
        List<AdminModel> admins = adminRepository.findAll();
        for (AdminModel admin : admins) {

            if (admin.getEmail().equals(email))
                return admin;
        }
        return null;
    }

    public List<BikeModel> getBikes(Long adminId) {
        List<BikeModel> bikes = bikeRepository.findAll();
        List<BikeModel> adminBikes = new ArrayList<>();

        for (BikeModel bike : bikes) {
            if (bike.getAdminID().equals(adminId)) {
                adminBikes.add(bike);
            }
        }
        return adminBikes;
    }

    public AdminModel getAdminDetails(String email) {
        return getAdmin(email);
    }

    public List<BikeModel> getAdminBikes(String email) {
        AdminModel admin = getAdmin(email);
        if(admin != null) return getBikes(admin.getId());
        return null;
    }

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

    public List<BookingsModel> getBookings(AdminModel data) {
        List<BookingsModel> bookings = bookingsRepository.findAll();
        List<BookingsModel> userBookings = new ArrayList<>();
        for (BookingsModel booking : bookings) {
            BikeModel bike = bikeRepository.findById(booking.getBikeID()).get();
            AdminModel admin = adminRepository.findById(bike.getAdminID()).get();
            if (admin.getId().equals(data.getId())) {
                userBookings.add(booking);
            }
        }
        return userBookings;
    }    

}
