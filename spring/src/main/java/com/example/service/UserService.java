package com.example.service;

import java.util.ArrayList;
import java.util.List;

import com.example.config.Passwordconfig;
import com.example.model.AdminModel;
import com.example.model.BikeModel;
import com.example.model.BookingsModel;
import com.example.model.LoginModel;
import com.example.model.UserModel;
import com.example.repository.AdminRepository;
import com.example.repository.BikeRepository;
import com.example.repository.BookingsRepository;
import com.example.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    AdminRepository adminRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    BikeRepository bikeRepository;

    @Autowired
    BookingsRepository bookingsRepository;

    @Autowired
    Passwordconfig passwordconfig;

    public List<AdminModel> getCompanies() {
        return adminRepository.findAll();
    }

    public List<AdminModel> getCompanyBikes(String companyName) {
        List<AdminModel> companies = getCompanies();
        List<AdminModel> companyBikes = new ArrayList<>();

        for (AdminModel company : companies) {
            if (companyName.equals(company.getCompanyName()))
                companyBikes.add(company);
        }
        return companyBikes;
    }

    public List<BikeModel> getBikes(AdminModel admin) {
        List<BikeModel> bikes = bikeRepository.findAll();
        List<AdminModel> companies = getCompanyBikes(admin.getCompanyName());
        List<BikeModel> companyBikes = new ArrayList<>();
        for (AdminModel company : companies) {
            for (BikeModel bike : bikes) {
                if (bike.getAdminID().equals(company.getId()))
                    companyBikes.add(bike);
            }
        }
        return companyBikes;
    }

    public BikeModel getBikeDetails(BikeModel data) {
        return bikeRepository.findById(data.getId()).get();
    }

    public UserModel findUserByEmail(LoginModel email) {
        return userRepository.findByEmail(email.getEmail());
    }

    public UserModel editUser(UserModel data) {
        UserModel user = userRepository.findById(data.getId()).get();
        user.setAge(data.getAge());
        user.setEmail(data.getEmail());
        if (!data.getPassword().equals(user.getPassword())) {
            data.setPassword(passwordconfig.hashPassword(data.getPassword()));
        }
        user.setPassword(data.getPassword());
        user.setMobileNumber(data.getMobileNumber());
        user.setUsername(data.getUsername());
        user.setUserRole("user");
        user = userRepository.save(data);
        return user;
    }

    public AdminModel addEarnings(Long id, String price) {
        AdminModel admin = adminRepository.findById(id).get();
        admin.setEarnings(admin.getEarnings() + Integer.parseInt(price));
        return admin;
    }

    public BookingsModel createBooking(BookingsModel data) {
        BikeModel bike = bikeRepository.findById(data.getId()).get();
        if (!bike.getStatus().equals("true")) {
            bike.setStatus(true + "");
            AdminModel admin = addEarnings(bike.getAdminID(), bike.getPrice());
            BookingsModel newBooking = new BookingsModel(Long.parseLong(data.getUserID() + ""), data.getBikeID(),
                    admin.getCompanyName(), data.getBikeModel(), data.getRent(), data.getDays(),
                    data.getDays() * data.getRent());
            return bookingsRepository.save(newBooking);
        }
        return null;
    }

    public List<BookingsModel> getBookings(LoginModel data) {
        UserModel user = findUserIdByEmail(data);
        List<BookingsModel> bookings = bookingsRepository.findAll();
        List<BookingsModel> userBookings = new ArrayList<>();
        for (BookingsModel booking : bookings) {
            if (booking.getUserID() != null && booking.getUserID().equals(user.getId())) {
                userBookings.add(booking);
            }
        }
        return userBookings;
    }

    private UserModel findUserIdByEmail(LoginModel user) {
        return userRepository.findByEmail(user.getEmail());
    }

}
