package com.digitalbooking.proyect.repository;

import com.digitalbooking.proyect.model.Booking;
import com.digitalbooking.proyect.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    @Query(value = "SELECT * FROM bookings b WHERE b.id_product = :id", nativeQuery = true)
    List<Booking> findBookingByProduct(@Param("id")Long id);

    @Query(value = "SELECT * FROM bookings b WHERE b.id_user = :id", nativeQuery = true)
    List<Booking> findBookingByUser(@Param("id")Long id);
}
