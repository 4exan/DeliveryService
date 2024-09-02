package ua.kusakabe.delivery.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import ua.kusakabe.delivery.entity.Department;
import ua.kusakabe.delivery.entity.Package;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class PackageRR {

    private int statusCode;
    private String error;
    private String message;

    private String sender_name;
    private String sender_phone;
    private String sender_department;
    private String package_type;
    private String package_description;
    private String package_price;
    private String package_params;
    private String recipient_name;
    private String recipient_phone;
    private String recipient_department;
    private String status;

    List<Package> packageList;
    private Package upackage;

}
