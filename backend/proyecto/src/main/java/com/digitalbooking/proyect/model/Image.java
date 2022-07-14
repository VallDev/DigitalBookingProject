package com.digitalbooking.proyect.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "images")
@Getter @Setter
public class Image {

    @NotNull
    @Id
    @SequenceGenerator(name = "image_sequence", sequenceName = "image_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "image_sequence")
    private Long id;
    @NotNull
    @Column
    private String title;
    @NotNull
    @Column
    private String urlimg;
    @NotNull
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "id_product", referencedColumnName = "id")
    private Product id_product;


    public Image(Long id, String title, String urlimg, Product id_product) {
        this.id = id;
        this.title = title;
        this.urlimg = urlimg;
        this.id_product = id_product;
    }

    public Image(String title, String urlimg, Product id_product) {
        this.title = title;
        this.urlimg = urlimg;
        this.id_product = id_product;
    }

    public Image() {
    }
}
