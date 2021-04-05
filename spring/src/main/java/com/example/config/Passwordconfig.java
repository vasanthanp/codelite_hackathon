package com.example.config;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class Passwordconfig {
    public String hashPassword(String plainTextPassword) {
        return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());

    }

    public boolean checkPass(String password, String hashed) {
        try {
            return BCrypt.checkpw(password, hashed);
        } catch (Exception e) {
            return false;
        }
    }

}