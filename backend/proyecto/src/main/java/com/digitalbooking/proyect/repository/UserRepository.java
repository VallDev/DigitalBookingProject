package com.digitalbooking.proyect.repository;

import com.digitalbooking.proyect.model.UserEntity;
import com.digitalbooking.proyect.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByUsername(String username);

}
