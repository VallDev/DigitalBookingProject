package com.digitalbooking.proyect.model.DTO;


import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UserDTO {
    private String name;
    private String surname;
    private String username;
    private String email;
    private String password;
    private String city;
    private Long id_role;

}
