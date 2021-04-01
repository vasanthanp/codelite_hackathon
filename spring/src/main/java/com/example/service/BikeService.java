package com.example.service;

import com.example.model.BikeModel;

import java.util.List;

// import com.example.repository.AdminRepository;
import com.example.repository.BikeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BikeService {
    @Autowired
    private BikeRepository bikeRepository;

    public BikeModel isBikePresent(BikeModel data) {
        List<BikeModel> bikes = bikeRepository.findAll();
        for (BikeModel bike : bikes) {
            if (bike.getBikeID().equals(data.getBikeID()))
                return bike;
        }
        return null;
    }

    public List<BikeModel> saveBike(BikeModel data) {

        if (isBikePresent(data) == null)
            bikeRepository.save(data);

        List<BikeModel> bikeLists = bikeRepository.findAll();

        return bikeLists;
    }

    public BikeModel editBike(BikeModel data) {
        BikeModel bike = bikeRepository.findById(data.getId()).get();

        if(bike.getAdminID() != null)data.setAdminID(bike.getAdminID());
        if(bike.getStatus() != null)data.setStatus(bike.getStatus());

        bike.setBikeModel(data.getBikeModel());
        bike.setPrice(data.getPrice());
        bike.setType(data.getType());
        bike.setAdminID(data.getAdminID());
        bike.setBikeModel(data.getBikeModel());
        bike.setStatus(data.getStatus());
        bike = bikeRepository.save(data);

        return bike;
    }

    public boolean deleteBike(BikeModel data) {
        try {
            BikeModel bike = bikeRepository.findById(data.getId()).get();
            if (bike != null) {
                bikeRepository.delete(bike);
                return true;
            }
        } catch (Exception e) {
        }
        return false;
    }

}
