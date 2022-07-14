package com.digitalbooking.proyect.service;

import com.digitalbooking.proyect.exceptions.ResourceNotFoundException;
import com.digitalbooking.proyect.model.Booking;
import com.digitalbooking.proyect.model.City;
import com.digitalbooking.proyect.model.DTO.CityDTO;
import com.digitalbooking.proyect.model.Product;
import com.digitalbooking.proyect.repository.CityRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CityService {

    @Autowired
    CityRespository repository;

    @Autowired
    CountryService co_service;

    public Optional<City> findById(Long id) throws ResourceNotFoundException{
        Optional< City > searchedCity = repository.findById(id);
        if (searchedCity.isPresent()){
            return repository.findById(id);
        }
        else {
            throw new ResourceNotFoundException("City with ID: "+ id +" doesn´t exist");
        }

    }

    public List<City> listCity(){
        return repository.findAll();
    }

    public City saveCity(CityDTO city) throws ResourceNotFoundException {
        Set<Product> products = new HashSet<Product>();
        City ci = new City(city.getName(), co_service.findById(city.getId_country()).get(), products);
        return repository.save(ci);
    }

    public City updateCity(City city) throws ResourceNotFoundException {
        Optional<City> searchedCity = repository.findById(city.getId());
        if (searchedCity.isPresent()){
            return repository.save(city);
        }
        else {
            throw new ResourceNotFoundException("City with ID: "+ city.getId()+" doesn´t exist");
        }
    }

    public void deleteCity(Long id) throws ResourceNotFoundException{
        Optional<City> searchedCity = repository.findById(id);
        if (searchedCity.isPresent()){
            repository.deleteById(id);
        }
        else {
            throw new ResourceNotFoundException("City with ID: "+ id +" doesn´t exist");
        }
    }
}
