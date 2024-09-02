package ua.kusakabe.delivery.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import ua.kusakabe.delivery.entity.Department;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class DepartmentRR {

    private int statusCode;
    private String error;
    private String message;

    private String number;
    private String address;
    private String type;
    private String weight_restriction;
    private String dim_restriction_send;
    private String dim_restriction_receive;
    private int working_hours;
    private String services;

    private List<Department> departments;
    private Department department;

}
