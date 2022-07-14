package com.digitalbooking.proyect.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "roles")
@Getter
@Setter
public class Role {
    @NotNull
    @Id
    @SequenceGenerator(name = "role_sequence", sequenceName = "role_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "role_sequence")
    private Long id;
    @NotNull
    @Column
    private String name;
    @JsonIgnore
    @OneToMany(mappedBy = "id_role")
    private Set<UserEntity> users = new HashSet<>();

    public Role(String name) {
        this.name = name;
    }

    public Role(Long id, String name, Set<UserEntity> users) {
        this.id = id;
        this.name = name;
        this.users = users;
    }

    public Role(String name, Set<UserEntity> users) {
        this.name = name;
        this.users = users;
    }

    public Role() {
    }
}
