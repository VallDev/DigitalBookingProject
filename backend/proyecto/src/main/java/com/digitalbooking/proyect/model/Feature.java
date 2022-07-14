package com.digitalbooking.proyect.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "features")
@Getter @Setter
public class Feature {

    @NotNull
    @Id
    @SequenceGenerator(name = "feature_sequence", sequenceName = "feature_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "feature_sequence")
    private Long id;
    @NotNull
    @Column
    private String name_icon;
    @NotNull
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name="id_product", referencedColumnName = "id")
    private Product id_product;

    public Feature(Long id, String name_icon, Product id_product) {
        this.id = id;
        this.name_icon = name_icon;
        this.id_product = id_product;
    }

    public Feature(String name_icon, Product id_product) {
        this.name_icon = name_icon;
        this.id_product = id_product;
    }

    public Feature() {
    }
}