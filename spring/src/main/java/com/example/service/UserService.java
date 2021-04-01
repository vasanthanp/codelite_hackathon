package com.example.service;

import java.util.ArrayList;
import java.util.List;

import com.example.model.AdminModel;
import com.example.model.BikeModel;
import com.example.model.UserModel;
import com.example.repository.AdminRepository;
import com.example.repository.BikeRepository;
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
                if (bike.getAdminID().equals(company.getId() + ""))
                    companyBikes.add(bike);
            }
        }
        return companyBikes;
    }

    public BikeModel getBikeDetails(BikeModel bike) {
        return bike;
    }

    public UserModel editUser(UserModel data) {
        UserModel user = userRepository.findById(data.getId()).get();
        user.setEmail(data.getEmail());
        user.setPassword(data.getPassword());
        user.setMobileNumber(data.getMobileNumber());
        user.setUsername(data.getUsername());
        user.setAge(data.getAge());
        user = userRepository.save(data);
        return user;
    }

}
