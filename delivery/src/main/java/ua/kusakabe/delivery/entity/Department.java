package ua.kusakabe.delivery.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "departments")
@Data
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String number;
    private String address;
    private String type;
    private String weight_restriction;
    private String dim_restriction_send;
    private String dim_restriction_receive;
    private String services;

    @ManyToOne
    @JoinColumn(name = "department_working_hours")
    private WorkingHours workingHours;

    @JsonIgnore
    @OneToMany(mappedBy = "senderDepartment")
    private List<Package> sentPackages;
    @JsonIgnore
    @OneToMany(mappedBy = "recipientDepartment")
    private List<Package> receivedPackages;

}
