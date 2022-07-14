package com.digitalbooking.proyect.model.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ProductDTO {
    private String name;
    private String title_description;
    private String description;
    private String adress;
    private Integer rating;
    private Integer stars;
    private Long id_city;
    private Long id_category;
}
