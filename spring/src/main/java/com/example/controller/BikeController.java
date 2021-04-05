package com.example.controller;

import java.util.List;

import com.example.model.BikeModel;
import com.example.service.BikeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*", allowedHeaders = "*")
@RestController
public class BikeController {
    @Autowired
    BikeService bikeservice;

    @PostMapping("/bike/save")
    public List<BikeModel> saveBike(@RequestBody BikeModel data) {
        return bikeservice.saveBike(data);
    }

    @PutMapping("/bike/edit")
    public BikeModel editBike(@RequestBody BikeModel data) {
        return bikeservice.editBike(data);
    }

    @PostMapping("/bike/delete")
    public boolean deleteBike(@RequestBody BikeModel data) {
        return bikeservice.deleteBike(data);
    }

}
