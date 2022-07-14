package com.digitalbooking.proyect.controller;

import com.digitalbooking.proyect.exceptions.ResourceNotFoundException;
import com.digitalbooking.proyect.model.Booking;
import com.digitalbooking.proyect.model.DTO.BookingDTO;
import com.digitalbooking.proyect.service.BookingService;
import com.digitalbooking.proyect.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    ProductService productService;

    @Autowired
    BookingService service;

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "List all Bookings")
    @GetMapping("/list")
    public List<Booking> listBooking(){
        return service.listBookings();
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Create new Booking of a product")
    @PostMapping("/new")
    public Booking saveBooking(@RequestBody BookingDTO booking) throws ResourceNotFoundException {
        return service.saveBooking(booking);
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "Delete a Booking by id")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) throws ResourceNotFoundException {
        service.deleteBooking(id);
        return ResponseEntity.ok("Booking with ID: "+ id +" deleted");
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "get a booking by the product ID")
    @GetMapping("/get-by-product/{id}")
    public List<Booking> getBookingByProduct(@PathVariable Long id) throws ResourceNotFoundException{
        return service.findBookingByProduct(id);
    }

//    @CrossOrigin(origins = {"http://localhost:3000/", "http://load-balancer-grupo9-915343616.us-west-2.elb.amazonaws.com/"})
    @Operation(summary = "get a booking by the user ID")
    @GetMapping("/get-by-user/{id}")
    public List<Booking> getBookingByUser(@PathVariable Long id) throws ResourceNotFoundException{
        return service.findBookingByUser(id);
    }
}
