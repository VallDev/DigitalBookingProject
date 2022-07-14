package com.digitalbooking.proyect.service;

import com.digitalbooking.proyect.exceptions.ResourceBadRequestException;
import com.digitalbooking.proyect.exceptions.ResourceNotFoundException;
import com.digitalbooking.proyect.model.Category;
import com.digitalbooking.proyect.model.DTO.UserDTO;
import com.digitalbooking.proyect.model.UserEntity;
import com.digitalbooking.proyect.model.UserEntity;
import com.digitalbooking.proyect.repository.CityRespository;
import com.digitalbooking.proyect.repository.RoleRepository;
import com.digitalbooking.proyect.repository.UserRepository;
import com.digitalbooking.proyect.security.MyPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository repository;

    @Autowired
    @Lazy
    MyPasswordEncoder myPasswordEncoder;

    @Autowired
    RoleService r_service;

//    @Autowired
//    MyPasswordEncoder passwordEncoder;

    public UserEntity saveUser(UserDTO user) throws ResourceBadRequestException, ResourceNotFoundException {
        UserEntity searchedUser = repository.findByUsername(user.getUsername());
        if (searchedUser == null){
            UserEntity us = new UserEntity(user.getName(), user.getSurname(), user.getUsername(), user.getEmail(), myPasswordEncoder.encodePassword(user.getPassword()), user.getCity(), r_service.findById(user.getId_role()).get());
            return repository.save(us);
        }
        else {
            throw new ResourceBadRequestException("Ya hay un usuario registrado con ese email");
        }
    }

    public List<UserEntity> listUser(){
        return repository.findAll();
    }

    public Optional<UserEntity> findById(Long id) throws ResourceNotFoundException {
        Optional<UserEntity> searchedUser = repository.findById(id);
        if (searchedUser.isPresent()){
            return repository.findById(id);
        }
        else {
            throw new ResourceNotFoundException("User with ID: "+ id +" doesn´t exist");
        }
    }

    public void deleteUser(Long id) throws ResourceNotFoundException{
        Optional<UserEntity> searchedUser = repository.findById(id);
        if (searchedUser.isPresent()){
            repository.deleteById(id);
        }
        else {
            throw new ResourceNotFoundException("User with ID: "+ id +" doesn´t exist");
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = repository.findByUsername(username);

        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority(user.getId_role().getName()));

        return new User(user.getUsername(), user.getPassword(), true, true, true, true, authorities);
    }

    public UserEntity updateUser(UserEntity user) throws ResourceNotFoundException {
        Optional<UserEntity> searchedUser = repository.findById(user.getId());
        if (searchedUser.isPresent()){
            return repository.save(user);
        }
        else {
            throw new ResourceNotFoundException("Category with ID: "+ user.getId()+" doesn´t exist");
        }
    }
}
