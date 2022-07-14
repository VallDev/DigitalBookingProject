package com.digitalbooking.proyect.controller;

import com.digitalbooking.proyect.exceptions.ResourceNotFoundException;
import com.digitalbooking.proyect.model.Country;
import com.digitalbooking.proyect.model.DTO.RoleDTO;
import com.digitalbooking.proyect.model.Role;
import com.digitalbooking.proyect.security.DTO.AuthenticationDTORequest;
import com.digitalbooking.proyect.security.DTO.AuthenticationDTOResponse;
import com.digitalbooking.proyect.security.JwtService;
import com.digitalbooking.proyect.service.CountryService;
import com.digitalbooking.proyect.service.RoleService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/roles")
public class RoleController {

    @Autowired
    RoleService service;

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "List all roles")
    @GetMapping("/list")
    public List<Role> listRole() {
        return service.listRoles();
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Create new role")
    @PostMapping("/new")
    public Role saveRole(@RequestBody RoleDTO role) throws ResourceNotFoundException {
        return service.saveRole(role);
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Delete a role by id")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteRole(@PathVariable Long id) throws ResourceNotFoundException {
        service.deleteRole(id);
        return ResponseEntity.ok("Role with ID: " + id + " deleted");
    }
}
