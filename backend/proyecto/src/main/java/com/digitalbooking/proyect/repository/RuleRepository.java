package com.digitalbooking.proyect.repository;

import com.digitalbooking.proyect.model.Category;
import com.digitalbooking.proyect.model.Product;
import com.digitalbooking.proyect.model.Rule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RuleRepository  extends JpaRepository<Rule, Long> {
}
