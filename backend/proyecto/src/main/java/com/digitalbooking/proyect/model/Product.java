package com.digitalbooking.proyect.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.*;

@Entity
@Table(name = "products")
@Getter @Setter
public class Product {

    @NotNull
    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    private Long id;
    @NotNull
    @Column
    private String name;
    @NotNull
    @Column
    private String title_description;
    @NotNull
    @Column
    private String description;
    @NotNull
    @Column
    private String adress;
    @NotNull
    @Column
    private Integer rating;
    @NotNull
    @Column
    private Integer stars;
    @NotNull
    @OneToMany(mappedBy = "id_product")
    private Set<Image> images = new HashSet<>();
    @NotNull
    @OneToMany(mappedBy = "id_product")
    private Set<Rule> rules = new HashSet<>();
    @NotNull
    @OneToMany(mappedBy = "id_product")
    private Set<Feature> features = new HashSet<>();
    @OneToMany(mappedBy = "id_product")
    private Set<Booking> bookings = new HashSet<>();
    @NotNull
    @ManyToOne
    @JoinColumn(name="id_city", referencedColumnName = "id")
    private City id_city;
    @NotNull
    @ManyToOne
    @JoinColumn(name="id_category", referencedColumnName = "id")
    private Category id_category;

    public Product(Long id, String name, String title_description, String description, String adress, Integer rating, Integer stars, Set<Image> images, Set<Rule> rules, Set<Feature> features, Set<Booking> bookings, City id_city, Category id_category) {
        this.id = id;
        this.name = name;
        this.title_description = title_description;
        this.description = description;
        this.adress = adress;
        this.rating = rating;
        this.stars = stars;
        this.images = images;
        this.rules = rules;
        this.features = features;
        this.bookings = bookings;
        this.id_city = id_city;
        this.id_category = id_category;
    }

    public Product(String name, String title_description, String description, String adress, Integer rating, Integer stars, Set<Image> images, Set<Rule> rules, Set<Feature> features, Set<Booking> bookings, City id_city, Category id_category) {
        this.name = name;
        this.title_description = title_description;
        this.description = description;
        this.adress = adress;
        this.rating = rating;
        this.stars = stars;
        this.images = images;
        this.rules = rules;
        this.features = features;
        this.bookings = bookings;
        this.id_city = id_city;
        this.id_category = id_category;
    }

    public Product() {
    }
}
