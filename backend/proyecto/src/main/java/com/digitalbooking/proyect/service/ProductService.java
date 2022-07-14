package com.digitalbooking.proyect.service;

import com.digitalbooking.proyect.exceptions.ResourceBadRequestException;
import com.digitalbooking.proyect.exceptions.ResourceNotFoundException;
import com.digitalbooking.proyect.model.*;
import com.digitalbooking.proyect.model.DTO.ProductDTO;
import com.digitalbooking.proyect.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ProductService {

    @Autowired
    ProductRepository repository;

    @Autowired
    CityService city_service;

    @Autowired
    @Lazy
    CategoryService cat_service;

    public List<Product> listProduct(){
        return repository.findAll();
    }

    public Product saveProduct(ProductDTO product) throws ResourceNotFoundException, ResourceBadRequestException {
        Product searchedProduct = repository.findByName(product.getName());
        if (searchedProduct == null) {
            Set<Image> images = new HashSet<Image>();
            Set<Rule> rules = new HashSet<Rule>();
            Set<Feature> features = new HashSet<Feature>();
            Set<Booking> bookings = new HashSet<Booking>();
            Product p = new Product(product.getName(), product.getTitle_description(), product.getDescription(), product.getAdress(), product.getRating(), product.getStars(), images, rules, features, bookings, city_service.findById(product.getId_city()).get(), cat_service.findById(product.getId_category()).get());
            return repository.save(p);
        }
        else {
            throw new ResourceBadRequestException("Ya hay un producto con ese mismo nombre");
        }
    }

    public Optional<Product> findById(Long id) throws ResourceNotFoundException{
        Optional<Product> searchedProduct = repository.findById(id);
        if (searchedProduct.isPresent()){
            return repository.findById(id);
        }
        else {
            throw new ResourceNotFoundException("Product with ID: "+ id +" doesn´t exist");
        }
    }

    public Product updateProduct(Product product) throws ResourceNotFoundException {
        Optional<Product> searchedProduct = repository.findById(product.getId());
        if (searchedProduct.isPresent()){
            return repository.save(product);
        }
        else {
            throw new ResourceNotFoundException("Product with ID: "+ product.getId()+" doesn´t exist");
        }
    }

    public void deleteProduct(Long id) throws ResourceNotFoundException{
        Optional<Product> searchedProduct = repository.findById(id);
        if (searchedProduct.isPresent()){
            repository.deleteById(id);
        }
        else {
            throw new ResourceNotFoundException("Product with ID: "+ id +" doesn´t exist");
        }
    }

    public List<Product> findProductByCity(Long id) throws ResourceNotFoundException {
        List<Product> searchedProduct = repository.findProductByCity(id);
        if (searchedProduct != null) {
            return repository.findProductByCity(id);
        } else {
            throw new ResourceNotFoundException("Product with city with ID: " + id + " doesn´t exist");
        }
    }

    public List<Product> findProductByCategory(Long id) throws ResourceNotFoundException {
        List<Product> searchedProduct = repository.findProductByCategory(id);
        if (searchedProduct != null) {
            return repository.findProductByCategory(id);
        } else {
            throw new ResourceNotFoundException("Product with category with ID: " + id + " doesn´t exist");
        }
    }

    public List<Product> findProductByCategoryAndCity(Long id_category, Long id_city) throws ResourceNotFoundException {
        List<Product> searchedProduct = repository.findProductByCategoryAndCity(id_category, id_city);
        if (searchedProduct != null) {
            return repository.findProductByCategoryAndCity(id_category, id_city);
        } else {
            throw new ResourceNotFoundException("Product with category with ID: " + id_category + "and with city with ID: "+ id_city +" doesn´t exist");
        }
    }

    public List<Product> findProductByCityAndDate(java.sql.Date date_from, java.sql.Date date_to, Long id) throws ResourceNotFoundException {
        List<Product> searchedProduct = repository.findProductByCityAndDate(date_from, date_to, id);
        if (searchedProduct != null) {
            return repository.findProductByCityAndDate(date_from, date_to, id);
        } else {
            throw new ResourceNotFoundException("Product not found");
        }
    }

    public List<Product> findProductByDates(java.sql.Date date_from, java.sql.Date date_to) throws ResourceNotFoundException {
        List<Product> searchedProduct = repository.findProductByDates(date_from, date_to);
        if (searchedProduct != null) {
            return repository.findProductByDates(date_from, date_to);
        } else {
            throw new ResourceNotFoundException("Product not found");
        }
    }

    public List<Product> findProductByCityAndDateAndCategory(java.sql.Date date_from, java.sql.Date date_to, Long id_city, Long id_category) throws ResourceNotFoundException {
        List<Product> searchedProduct = repository.findProductByCityAndDateAndCategory(date_from, date_to, id_city, id_category);
        if (searchedProduct != null) {
            return repository.findProductByCityAndDateAndCategory(date_from, date_to, id_city, id_category);
        } else {
            throw new ResourceNotFoundException("Product not found");
        }
    }

    public Product findByName(String name) throws ResourceNotFoundException {
        Product searchedProduct = repository.findByName(name);
        if (searchedProduct != null) {
            return repository.findByName(name);
        } else {
            throw new ResourceNotFoundException("Product with name: " + name + " doesn´t exist");
        }
    }

}
