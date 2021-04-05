package com.example.service;

import java.util.List;

import com.example.config.Passwordconfig;
import com.example.model.AdminModel;
import com.example.model.LoginModel;
import com.example.model.SuperAdminModel;
import com.example.model.UserModel;
import com.example.repository.AdminRepository;
import com.example.repository.SuperAdminRepository;
import com.example.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    AdminRepository adminRepository;
    @Autowired
    SuperAdminRepository superAdminRepository;
    @Autowired
    Passwordconfig passwordconfig;

    // ===============SIGN-UP==============================
    public UserModel setCurrentUser(UserModel data) {
        List<UserModel> users = userRepository.findAll();
        for (UserModel user : users) {
            if (user.getEmail().equals(data.getEmail())) {
                return user;
            }
        }
        return null;
    }

    public UserModel saveUser(UserModel data) {
        UserModel currentUser = setCurrentUser(data);
        if (currentUser == null) {
            String hash = passwordconfig.hashPassword(data.getPassword());
            data.setPassword(hash);
            return userRepository.save(data);
        }
        return null;
    }

    public AdminModel setCurrentAdmin(AdminModel data) {
        List<AdminModel> admins = adminRepository.findAll();
        System.out.println(admins);
        for (AdminModel admin : admins) {
            if (admin.getEmail().equals(data.getEmail())) {
                return admin;
            }
        }
        return null;
    }

    public AdminModel saveAdmin(AdminModel data) {
        AdminModel currentAdmin = setCurrentAdmin(data);
        if (currentAdmin == null) {
            String hash = passwordconfig.hashPassword(data.getPassword());
            data.setPassword(hash);
            return adminRepository.save(data);
        }
        return null;
    }

    // ============================LOGIN==========================
    public boolean isUserPresent(LoginModel data) {
        List<UserModel> users = userRepository.findAll();
        for (UserModel user : users) {
            if (user.getEmail().equals(data.getEmail())
                    && passwordconfig.checkPass(data.getPassword(), user.getPassword()))
                return true;
        }
        return false;
    }

    public boolean isAdminPresent(LoginModel data) {
        List<AdminModel> admins = adminRepository.findAll();
        for (AdminModel admin : admins) {
            if (admin.getEmail().equals(data.getEmail())
                    && passwordconfig.checkPass(data.getPassword(), admin.getPassword()))
                return true;
        }
        return false;
    }

    public boolean isSuperAdminPresent(SuperAdminModel data) {
        try {
            SuperAdminModel superadmin = superAdminRepository.findById(data.getId()).get();
            if (superadmin.getEmail().equals(data.getEmail()) && superadmin.getPassword().equals(data.getPassword()))
                return true;
        } catch (Exception e) {
        }
        return false;
    }
}