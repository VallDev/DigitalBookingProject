package com.digitalbooking.proyect.model.DTO;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class BookingDTO {
    private Date date_from;
    private Date date_to;
    private String start_time;
    private Long id_user;
    private Long id_product;
}
