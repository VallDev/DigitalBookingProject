package com.digitalbooking.proyect.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "categories")
@Getter @Setter
public class Category {

    @NotNull
    @Id
    @SequenceGenerator(name = "category_sequence", sequenceName = "category_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_sequence")
    private Long id;
    @NotNull
    @Column
    private String title;
    @NotNull
    @Column
    private Integer quantity;
    @NotNull
    @Column
    private String urlimg;
    @NotNull
    @JsonIgnore
    @OneToMany(mappedBy = "id_category")
    private Set<Product> products = new HashSet<>();

    public Category(Long id, String title, Integer quantity, String urlimg, Set<Product> products) {
        this.id = id;
        this.title = title;
        this.quantity = quantity;
        this.urlimg = urlimg;
        this.products = products;
    }

    public Category(String title, Integer quantity, String urlimg, Set<Product> products) {
        this.title = title;
        this.quantity = quantity;
        this.urlimg = urlimg;
        this.products = products;
    }

    public Category() {
    }

}
