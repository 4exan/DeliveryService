package ua.kusakabe.delivery.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "workinghours")
@Data
public class WorkingHours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String mon;
    private String mon_same_day_shipping;
    private String mon_shipment_arrival;
    private String tue;
    private String tue_same_day_shipping;
    private String tue_shipment_arrival;
    private String wed;
    private String wed_same_day_shipping;
    private String wed_shipment_arrival;
    private String thu;
    private String thu_same_day_shipping;
    private String thu_shipment_arrival;
    private String fri;
    private String fri_same_day_shipping;
    private String fri_shipment_arrival;
    private String sat;
    private String sat_same_day_shipping;
    private String sat_shipment_arrival;
    private String sun;
    private String sun_same_day_shipping;
    private String sun_shipment_arrival;

    @JsonIgnore
    @OneToMany(mappedBy = "workingHours")
    private List<Department> departments_hours;
}
