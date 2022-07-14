package com.digitalbooking.proyect.repository;

import com.digitalbooking.proyect.model.Category;
import com.digitalbooking.proyect.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRespository  extends JpaRepository<Country, Long> {
}
