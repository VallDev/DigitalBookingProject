package com.digitalbooking.proyect.controller;

import com.digitalbooking.proyect.exceptions.ResourceNotFoundException;
import com.digitalbooking.proyect.model.DTO.RuleDTO;
import com.digitalbooking.proyect.model.Rule;
import com.digitalbooking.proyect.service.ProductService;
import com.digitalbooking.proyect.service.RuleService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/rules")
public class RuleController {

    @Autowired
    ProductService productService;

    @Autowired
    RuleService service;

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "List all rules")
    @GetMapping("/list")
    public List<Rule> listRules(){
        return service.listRule();
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Create new Rule of a product")
    @PostMapping("/new")
    public Rule saveRule(@RequestBody RuleDTO rule) throws ResourceNotFoundException {
        return service.saveRule(rule);
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Delete a Rule by id")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteRule(@PathVariable Long id) throws ResourceNotFoundException {
        service.deleteRule(id);
        return ResponseEntity.ok("Rule with ID: "+ id +" deleted");
    }
}
