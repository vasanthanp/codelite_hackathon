package com.example.service;

import java.util.ArrayList;
import java.util.List;

import com.example.model.AdminModel;
import com.example.model.BikeModel;
import com.example.model.BookingsModel;
import com.example.model.UserModel;
import com.example.repository.AdminRepository;
import com.example.repository.BikeRepository;
import com.example.repository.BookingsRepository;
import com.example.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SuperAdminService {

    @Autowired
    AdminRepository adminRepository;
    @Autowired
    BookingsRepository bookingsRepository;
    @Autowired
    BikeRepository bikeRepository;

    @Autowired
    UserRepository userRepository;

    public void deleteBikeBookings(Long id) {
        List<BookingsModel> bookings = bookingsRepository.findAll();
        for (BookingsModel booking : bookings) {
            if (booking.getBikeID().equals(id))
                bookingsRepository.delete(booking);
        }
    }

    public void deleteAdminBikes(Long id) {

        List<BikeModel> bikes = bikeRepository.findAll();
        for (BikeModel bike : bikes) {
            if (bike.getAdminID().equals(id)) {
                deleteBikeBookings(bike.getId());
                bikeRepository.delete(bike);
            }
        }
    }

    public List<AdminModel> deleteAdmin(Long adminID) {
        try {
            AdminModel admin = adminRepository.findById(adminID).get();
            if (admin != null) {
                deleteAdminBikes(admin.getId());
                adminRepository.delete(admin);
            }
        } catch (Exception e) {
        }
        return adminRepository.findAll();

    }

    public void deleteUserBookings(Long id) {
        List<BookingsModel> bookings = bookingsRepository.findAll();
        for (BookingsModel booking : bookings) {
            if (booking.getUserID().equals(id))
                bookingsRepository.delete(booking);
        }
    }

    public List<UserModel> deleteUser(Long userID) {
        try {
            UserModel user = userRepository.findById(userID).get();
            if (user != null) {
                deleteUserBookings(user.getId());
                userRepository.delete(user);
            }
        } catch (Exception e) {
        }
        return userRepository.findAll();
    }

    public List<List<Object>> getAllBookings() {
        List<BookingsModel> bookings = bookingsRepository.findAll();
        List<List<Object>> allBookings = new ArrayList<>(bookings.size());
        for (BookingsModel booking : bookings) {
            BikeModel bike = bikeRepository.findById(booking.getBikeID()).get();
            AdminModel admin = adminRepository.findById(bike.getAdminID()).get();
            List<Object> l = new ArrayList<>();
            l.add(booking.getId());
            l.add(admin.getSellerName());
            l.add(booking.getCompanyName());
            l.add(booking.getBikeModel());
            l.add(booking.getRent());
            l.add(booking.getDays());
            l.add(booking.getTotalPrice());
            allBookings.add(l);
        }
        return allBookings;
    }

}