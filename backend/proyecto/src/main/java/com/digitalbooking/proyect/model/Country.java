package com.digitalbooking.proyect.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "countries")
@Getter @Setter
public class Country {

    @NotNull
    @Id
    @SequenceGenerator(name = "country_sequence", sequenceName = "country_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "country_sequence")
    private Long id;
    @NotNull
    @Column
    private String name;
    @NotNull
    @OneToMany(mappedBy = "id_country")
    @JsonIgnore
    private Set<City> cities = new HashSet<>();

    public Country(Long id, String name, Set<City> cities) {
        this.id = id;
        this.name = name;
        this.cities = cities;
    }

    public Country(String name, Set<City> cities) {
        this.name = name;
        this.cities = cities;
    }

    public Country(){}
}
