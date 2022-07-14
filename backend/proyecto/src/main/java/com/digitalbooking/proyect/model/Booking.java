package com.digitalbooking.proyect.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "bookings")
@Getter
@Setter
public class Booking {
    @NotNull
    @Id
    @SequenceGenerator(name = "booking_sequence", sequenceName = "booking_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "booking_sequence")
    private Long id;
    @NotNull
    @Column
    private Date date_from;
    @NotNull
    @Column
    private Date date_to;
    @NotNull
    @Column
    private String start_time;
    @NotNull
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name="id_user", referencedColumnName = "id")
    private UserEntity id_user;
    @NotNull
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name="id_product", referencedColumnName = "id")
    private Product id_product;

    public Booking(Long id, Date date_from, Date date_to, String start_time, UserEntity id_user, Product id_product) {
        this.id = id;
        this.date_from = date_from;
        this.date_to = date_to;
        this.start_time = start_time;
        this.id_user = id_user;
        this.id_product = id_product;
    }

    public Booking(Date date_from, Date date_to, String start_time, UserEntity id_user, Product id_product) {
        this.date_from = date_from;
        this.date_to = date_to;
        this.start_time = start_time;
        this.id_user = id_user;
        this.id_product = id_product;
    }

    public Booking() {
    }
}
