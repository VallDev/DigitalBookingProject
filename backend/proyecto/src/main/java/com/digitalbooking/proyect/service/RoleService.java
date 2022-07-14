package com.digitalbooking.proyect.service;

import com.digitalbooking.proyect.exceptions.ResourceNotFoundException;
import com.digitalbooking.proyect.model.City;
import com.digitalbooking.proyect.model.DTO.RoleDTO;
import com.digitalbooking.proyect.model.Role;
import com.digitalbooking.proyect.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    RoleRepository repository;

    public List<Role> listRoles(){
        return repository.findAll();
    }

    public Optional<Role> findById(Long id) throws ResourceNotFoundException{
        Optional< Role > searchedRole = repository.findById(id);
        if (searchedRole.isPresent()){
            return repository.findById(id);
        }
        else {
            throw new ResourceNotFoundException("Role with ID: "+ id +" doesn´t exist");
        }

    }

    public Role saveRole(RoleDTO role){
        Role rol = new Role(role.getName());
        return repository.save(rol);
    }

    public Role updateRole(Role role) throws ResourceNotFoundException {
        Optional<Role> searchedRole = repository.findById(role.getId());
        if (searchedRole.isPresent()){
            return repository.save(role);
        }
        else {
            throw new ResourceNotFoundException("Role with ID: "+ role.getId()+" doesn´t exist");
        }
    }

    public void deleteRole(Long id) throws ResourceNotFoundException{
        Optional<Role> searchedRole = repository.findById(id);
        if (searchedRole.isPresent()){
            repository.deleteById(id);
        }
        else {
            throw new ResourceNotFoundException("Role with ID: "+ id +" doesn´t exist");
        }
    }
}
