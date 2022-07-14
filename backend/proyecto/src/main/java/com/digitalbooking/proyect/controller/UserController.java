package com.digitalbooking.proyect.controller;

import com.digitalbooking.proyect.exceptions.ResourceBadRequestException;
import com.digitalbooking.proyect.exceptions.ResourceNotFoundException;
import com.digitalbooking.proyect.model.DTO.UserDTO;
import com.digitalbooking.proyect.model.UserEntity;
import com.digitalbooking.proyect.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService service;

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "List all users")
    @GetMapping("/list")
    public List<UserEntity> listUser(){
        return service.listUser();
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "get a user by id")
    @GetMapping("/get/{id}")
    public ResponseEntity<UserEntity> getUser(@PathVariable Long id) throws ResourceNotFoundException{
        Optional<UserEntity> userSearched = service.findById(id);
        if (userSearched.isPresent()){
            return ResponseEntity.ok(userSearched.get());
        }
        else {
            throw new ResourceNotFoundException("User with ID: "+ id +" doesn´t exist");
        }
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Create new user")
    @PostMapping("/new")
    public ResponseEntity<UserEntity> saveUser(@RequestBody UserDTO user) throws ResourceBadRequestException, ResourceNotFoundException {
            service.saveUser(user);
            return ResponseEntity.status(HttpStatus.CREATED).build();
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Delete a user by id")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) throws ResourceNotFoundException{
        service.deleteUser(id);
        return ResponseEntity.ok("User with ID: "+ id +" deleted");
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Update a user")
    @PutMapping("/update")
    public ResponseEntity<String> updateUser(@PathVariable UserEntity user) throws ResourceNotFoundException{
        service.updateUser(user);
        return ResponseEntity.ok("User with ID: "+ user.getId() +" updated");
    }

}
