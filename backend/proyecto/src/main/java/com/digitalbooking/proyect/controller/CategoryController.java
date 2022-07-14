package com.digitalbooking.proyect.controller;

import com.digitalbooking.proyect.exceptions.ResourceNotFoundException;
import com.digitalbooking.proyect.model.Category;
import com.digitalbooking.proyect.model.DTO.CategoryDTO;
import com.digitalbooking.proyect.model.Product;
import com.digitalbooking.proyect.service.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    CategoryService service;

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "List all categories")
    @GetMapping("/list")
    public List<Category> listCategories(){
        return service.listCategories();
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Create new category")
    @PostMapping("/new")
    public Category saveCategory(@RequestBody CategoryDTO category) throws ResourceNotFoundException{
        return service.saveCategory(category);
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Update a category")
    @PutMapping("/update")
    public ResponseEntity<String> updateCategory(@RequestBody Category category) throws ResourceNotFoundException {
        service.updateCategory(category);
        return ResponseEntity.ok("Updated category with ID: "+ category.getId());
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Delete a category by id")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id) throws ResourceNotFoundException{
        service.deleteCategory(id);
        return ResponseEntity.ok("Category with ID: "+ id +" deleted");
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "get quantity of products in a category")
    @GetMapping("/get-quantity/{id}")
    public Integer getQuantityOfProducts(@PathVariable Long id){
        return service.getQuantityOfProductsInCategory(id);
    }

}

