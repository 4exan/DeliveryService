package ua.kusakabe.delivery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import ua.kusakabe.delivery.dto.DepartmentRR;
import ua.kusakabe.delivery.dto.PackageRR;
import ua.kusakabe.delivery.entity.Department;
import ua.kusakabe.delivery.service.DepartmentService;

@RestController
@RequestMapping("/department")
public class DepartmentController {

    @Autowired
    DepartmentService departmentService;

    @GetMapping("/get-all")
    public ResponseEntity<DepartmentRR> getAllDepartments() {
        return ResponseEntity.ok(departmentService.getAllDepartments());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DepartmentRR> getDepartmentById(@PathVariable String id) {
        return ResponseEntity.ok(departmentService.getDepartmentByNumber(id));
    }

    @PostMapping("/new")
    public ResponseEntity<DepartmentRR> newDepartment(@RequestBody DepartmentRR request) {
        return ResponseEntity.ok(departmentService.addDepartment(request));
    }

}
