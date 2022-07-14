package com.digitalbooking.proyect.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "rules")
@Getter @Setter
public class Rule {
    @NotNull
    @Id
    @SequenceGenerator(name = "rule_sequence", sequenceName = "rule_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rule_sequence")
    private Long id;
    @NotNull
    @Column
    private String type;
    @NotNull
    @Column
    private String description;
    @NotNull
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name="id_product", referencedColumnName = "id")
    private Product id_product;

    public Rule(Long id, String type, String description, Product id_product) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.id_product = id_product;
    }

    public Rule(String type, String description, Product id_product) {
        this.type = type;
        this.description = description;
        this.id_product = id_product;
    }

    public Rule() {
    }
}
