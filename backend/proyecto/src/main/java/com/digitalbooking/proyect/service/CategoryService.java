package com.digitalbooking.proyect.service;

import com.digitalbooking.proyect.exceptions.ResourceNotFoundException;
import com.digitalbooking.proyect.model.Booking;
import com.digitalbooking.proyect.model.Category;
import com.digitalbooking.proyect.model.DTO.CategoryDTO;
import com.digitalbooking.proyect.model.Product;
import com.digitalbooking.proyect.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository repository;

    @Autowired
    ProductService p_service;

    public List<Category> listCategories(){
        for (Category cat : repository.findAll()) {
            cat.setQuantity(getQuantityOfProductsInCategory(cat.getId()));
        }
        return repository.findAll();
    }

    public Optional<Category> findById(Long id) throws ResourceNotFoundException{
        Optional<Category> searchedCategory = repository.findById(id);
        if (searchedCategory.isPresent()){
            return repository.findById(id);
        }
        else {
            throw new ResourceNotFoundException("Category with ID: "+ id +" doesn´t exist");
        }

    }

    public Category saveCategory(CategoryDTO category){
        Set<Product> products = new HashSet<Product>();
        Category cat = new Category(category.getTitle(),0,category.getUrlimg(), products);
        return repository.save(cat);
    }

    public Category updateCategory(Category category) throws ResourceNotFoundException {
        Optional<Category> searchedCategory = repository.findById(category.getId());
        if (searchedCategory.isPresent()){
            return repository.save(category);
        }
        else {
            throw new ResourceNotFoundException("Category with ID: "+ category.getId()+" doesn´t exist");
        }
    }

    public void deleteCategory(Long id) throws ResourceNotFoundException{
        Optional<Category> searchedCategory = repository.findById(id);
        if (searchedCategory.isPresent()){
            repository.deleteById(id);
        }
        else {
            throw new ResourceNotFoundException("Category with ID: "+ id +" doesn´t exist");
        }
    }

    public Integer getQuantityOfProductsInCategory(Long id){
        return repository.getQuantityOfProductsInCategory(id);
    }

}
