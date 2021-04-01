package com.example.service;

import java.util.ArrayList;
import java.util.List;

import com.example.model.AdminModel;
import com.example.model.BikeModel;
import com.example.repository.AdminRepository;
import com.example.repository.BikeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    AdminRepository adminRepository;
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

}
