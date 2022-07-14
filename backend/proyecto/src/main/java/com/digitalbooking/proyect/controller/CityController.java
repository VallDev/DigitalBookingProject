package com.digitalbooking.proyect.controller;

import com.digitalbooking.proyect.exceptions.ResourceNotFoundException;
import com.digitalbooking.proyect.model.City;
import com.digitalbooking.proyect.model.DTO.CityDTO;
import com.digitalbooking.proyect.service.CityService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/cities")
public class CityController {

    @Autowired
    CityService service;

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "List all cities")
    @GetMapping("/list")
    public List<City> listCity(){
        return service.listCity();
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Create new city")
    @PostMapping("/new")
    public City saveCity(@RequestBody CityDTO city) throws ResourceNotFoundException{
        return service.saveCity(city);
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Delete a city by id")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCity(@PathVariable Long id) throws ResourceNotFoundException {
        service.deleteCity(id);
        return ResponseEntity.ok("city with ID: "+ id +" deleted");
    }

}
