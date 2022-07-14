package com.digitalbooking.proyect.service;

import com.digitalbooking.proyect.exceptions.ResourceNotFoundException;
import com.digitalbooking.proyect.model.*;
import com.digitalbooking.proyect.model.DTO.CountryDTO;
import com.digitalbooking.proyect.repository.CountryRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CountryService {

    @Autowired
    CountryRespository repository;

    public List<Country> listCountries(){
        return repository.findAll();
    }

    public Optional<Country> findById(Long id) throws ResourceNotFoundException {
        Optional<Country> searchedCountry = repository.findById(id);
        if (searchedCountry.isPresent()){
            return repository.findById(id);
        }
        else {
            throw new ResourceNotFoundException("Country with ID: "+ id +" doesn´t exist");
        }
    }

    public Country saveCountry(CountryDTO country) throws ResourceNotFoundException {
        Set<City> cities = new HashSet<City>();
        Country co = new Country(country.getName(), cities);
        return repository.save(co);
    }

    public Country updateCountry(Country country) throws ResourceNotFoundException {
        Optional<Country> searchedCountry = repository.findById(country.getId());
        if (searchedCountry.isPresent()){
            return repository.save(country);
        }
        else {
            throw new ResourceNotFoundException("Country with ID: "+ country.getId()+" doesn´t exist");
        }
    }

    public void deleteCountry(Long id) throws ResourceNotFoundException{
        Optional<Country> searchedCountry = repository.findById(id);
        if (searchedCountry.isPresent()){
            repository.deleteById(id);
        }
        else {
            throw new ResourceNotFoundException("Country with ID: "+ id +" doesn´t exist");
        }
    }
}
