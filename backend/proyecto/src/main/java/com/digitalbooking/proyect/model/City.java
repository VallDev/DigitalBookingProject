package com.digitalbooking.proyect.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "cities")
@Getter @Setter
public class City {

    @NotNull
    @Id
    @SequenceGenerator(name = "city_sequence", sequenceName = "city_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "city_sequence")
    private Long id;
    @NotNull
    @Column
    private String name;
    @NotNull
    @ManyToOne
    @JoinColumn (name = "id_country", referencedColumnName = "id")
    private Country id_country;
    @NotNull
    @OneToMany(mappedBy = "id_city")
    @JsonIgnore
    private Set<Product> products = new HashSet<>();


    public City(Long id, String name, Country id_country, Set<Product> products) {
        this.id = id;
        this.name = name;
        this.id_country = id_country;
        this.products = products;
    }

    public City(String name, Country id_country, Set<Product> products) {
        this.name = name;
        this.id_country = id_country;
        this.products = products;
    }

    public City(){}
}
