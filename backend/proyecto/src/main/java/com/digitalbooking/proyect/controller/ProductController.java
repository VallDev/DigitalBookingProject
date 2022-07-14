package com.digitalbooking.proyect.controller;

import com.digitalbooking.proyect.exceptions.ResourceBadRequestException;
import com.digitalbooking.proyect.exceptions.ResourceNotFoundException;
import com.digitalbooking.proyect.model.DTO.ProductDTO;
import com.digitalbooking.proyect.model.Product;
import com.digitalbooking.proyect.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService service;

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "List all products")
    @GetMapping("/list")
    public List<Product> listProduct(){
        return service.listProduct();
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "get a product by id")
    @GetMapping("/get/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id) throws ResourceNotFoundException{
        Optional<Product> productSearched = service.findById(id);
        if (productSearched.isPresent()){
            return ResponseEntity.ok(productSearched.get());
        }
        else {
            throw new ResourceNotFoundException("Product with ID: "+ id +" doesn´t exist");
        }
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Create new product")
    @PostMapping("/new")
    public ResponseEntity<Product> saveProduct(@RequestBody ProductDTO product) throws ResourceNotFoundException, ResourceBadRequestException {
        service.saveProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(service.findByName(product.getName()));
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Update a product")
    @PutMapping("/update")
    public ResponseEntity<String> updateProduct(@RequestBody Product product) throws ResourceNotFoundException{
        service.updateProduct(product);
        return ResponseEntity.ok("Updated product with ID: "+ product.getId());
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Delete a product by id")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) throws ResourceNotFoundException{
        service.deleteProduct(id);
        return ResponseEntity.ok("Product with ID: "+ id +" deleted");
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "get a product by the city ID")
    @GetMapping("/get-by-city/{id}")
    public List<Product> getProductByCity(@PathVariable Long id) throws ResourceNotFoundException{
        return service.findProductByCity(id);
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "get a product by the category ID")
    @GetMapping("/get-by-category/{id}")
    public List<Product> getProductByCategory(@PathVariable Long id) throws ResourceNotFoundException{
        return service.findProductByCategory(id);
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "get a product by city id and start/end dates")
    @GetMapping("/get-by-city-and-date/{date_from}/{date_to}/{id_city}")
    public List<Product> getProductByDatesAndCity(@PathVariable String date_from, @PathVariable String date_to, @PathVariable Long id_city) throws ResourceNotFoundException{
        java.sql.Date from = java.sql.Date.valueOf(date_from);
        java.sql.Date to = java.sql.Date.valueOf(date_to);
        return service.findProductByCityAndDate(from, to, id_city);
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "get a product by start/end dates")
    @GetMapping("/get-by-dates/{date_from}/{date_to}")
    public List<Product> getProductByDates(@PathVariable String date_from, @PathVariable String date_to) throws ResourceNotFoundException{
        java.sql.Date from = java.sql.Date.valueOf(date_from);
        java.sql.Date to = java.sql.Date.valueOf(date_to);
        return service.findProductByDates(from, to);
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "get a product by category id and city")
    @GetMapping("/get-by-category-and-city/{id_category}/{id_city}")
    public List<Product> getProductByCategoryAndCity(@PathVariable Long id_category, @PathVariable Long id_city) throws ResourceNotFoundException{
        return service.findProductByCategoryAndCity(id_category, id_city);
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "get a product by category id, city id and start/end dates")
    @GetMapping("/get-by-category-and-city-and-dates/{date_from}/{date_to}/{id_city}/{id_category}")
    public List<Product> getProductByCategoryAndCityAndDates(@PathVariable String date_from, @PathVariable String date_to, @PathVariable Long id_city, @PathVariable Long id_category) throws ResourceNotFoundException{
        java.sql.Date from = java.sql.Date.valueOf(date_from);
        java.sql.Date to = java.sql.Date.valueOf(date_to);
        return service.findProductByCityAndDateAndCategory(from, to, id_city, id_category);
    }

}
