package com.example.service;

import com.example.model.BikeModel;
import com.example.model.BookingsModel;

import java.util.List;

// import com.example.repository.AdminRepository;
import com.example.repository.BikeRepository;
import com.example.repository.BookingsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BikeService {
    @Autowired
    private BikeRepository bikeRepository;
    @Autowired
    private BookingsRepository bookingsRepository;

    public BikeModel isBikePresent(BikeModel data) {
        List<BikeModel> bikes = bikeRepository.findAll();
        for (BikeModel bike : bikes) {
            if (bike.getId().equals(data.getId()))
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

    public void deleteBikeBookings(Long id) {
        List<BookingsModel> bookings = bookingsRepository.findAll();
        for(BookingsModel booking : bookings) {
            if(booking.getBikeID().equals(id)) bookingsRepository.delete(booking);
        }
    }

    public boolean deleteBike(BikeModel data) {
        try {
            BikeModel bike = bikeRepository.findById(data.getId()).get();
            if (bike != null) {
                deleteBikeBookings(data.getId());
                bikeRepository.delete(bike);
                return true;
            }
        } catch (Exception e) {
        }
        return false;
    }

}
