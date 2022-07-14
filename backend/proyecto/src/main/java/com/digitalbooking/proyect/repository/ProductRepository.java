package com.digitalbooking.proyect.repository;

import com.digitalbooking.proyect.model.Category;
import com.digitalbooking.proyect.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface ProductRepository  extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.id_city.id = ?1")
    List<Product> findProductByCity(Long id);

    @Query("SELECT p FROM Product p WHERE p.id_category.id = ?1")
    List<Product> findProductByCategory(Long id);

    @Query("SELECT p FROM Product p WHERE p.id_category.id = ?1 AND p.id_city.id = ?2")
    List<Product> findProductByCategoryAndCity(Long id_category, Long id_city);

    @Query(value = "SELECT * FROM products p WHERE p.id_city = :id AND p.id NOT IN " +
            "(SELECT p.id FROM products p JOIN bookings b ON b.id_product = p.id " +
            "WHERE " +
            "(b.date_from <= :date_from AND :date_to <= b.date_to) OR (b.date_from >= :date_from AND :date_to >= b.date_to) OR " +
            "(b.date_from <= :date_to AND :date_to <= b.date_to) OR (b.date_from <= :date_from AND :date_from <= b.date_to)" +
            ")", nativeQuery = true)
    List<Product> findProductByCityAndDate(@Param("date_from")java.sql.Date date_from, @Param("date_to")java.sql.Date date_to, @Param("id")Long id);

    @Query(value = "SELECT * FROM products p WHERE p.id NOT IN " +
            "(SELECT p.id FROM products p JOIN bookings b ON b.id_product = p.id " +
            "WHERE " +
            "(b.date_from <= :date_from AND :date_to <= b.date_to) OR (b.date_from >= :date_from AND :date_to >= b.date_to) OR " +
            "(b.date_from <= :date_to AND :date_to <= b.date_to) OR (b.date_from <= :date_from AND :date_from <= b.date_to)" +
            ")", nativeQuery = true)
    List<Product> findProductByDates(@Param("date_from")java.sql.Date date_from, @Param("date_to")java.sql.Date date_to);

    @Query(value = "SELECT * FROM products p WHERE p.id_city = :id_city AND p.id_category = :id_category AND p.id NOT IN " +
            "(SELECT p.id FROM products p JOIN bookings b ON b.id_product = p.id " +
            "WHERE " +
            "(b.date_from <= :date_from AND :date_to <= b.date_to) OR (b.date_from >= :date_from AND :date_to >= b.date_to) OR " +
            "(b.date_from <= :date_to AND :date_to <= b.date_to) OR (b.date_from <= :date_from AND :date_from <= b.date_to)" +
            ")", nativeQuery = true)
    List<Product> findProductByCityAndDateAndCategory(@Param("date_from")java.sql.Date date_from, @Param("date_to")java.sql.Date date_to, @Param("id_city")Long id_city, @Param("id_category")Long id_category);

    @Query("SELECT p FROM Product p WHERE p.name = ?1")
    Product findByName(String name);
}
