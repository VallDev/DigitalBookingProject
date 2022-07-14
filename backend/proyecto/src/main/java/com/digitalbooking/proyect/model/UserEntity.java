package com.digitalbooking.proyect.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
public class UserEntity {
    @NotNull
    @Id
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    private Long id;
    @NotNull
    @Column
    private String name;
    @NotNull
    @Column
    private String surname;
    @NotNull
    @Column
    private String username;
    @NotNull
    @Column
    private String email;
    @NotNull
    @Column
    private String password;
    @Column
    private String city;
    @NotNull
    @ManyToOne
    @JoinColumn(name="id_role", referencedColumnName = "id")
    private Role id_role;
    //    @JsonIgnore
    @OneToMany(mappedBy = "id_user")
    private Set<Booking> bookings = new HashSet<>();


    public UserEntity(Long id, String name, String surname, String username, String email, String password, String city, Role id_role) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.city = city;
        this.id_role = id_role;
    }

    public UserEntity(String name, String surname, String username, String email, String password, String city, Role id_role) {

        this.name = name;
        this.surname = surname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.city = city;
        this.id_role = id_role;
    }

    public UserEntity() {
    }
}
