package ua.kusakabe.delivery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import ua.kusakabe.delivery.dto.PackageRR;
import ua.kusakabe.delivery.service.PackageService;

@RestController
@RequestMapping("/package")
public class PackageController {

    @Autowired
    private PackageService packageService;

    @GetMapping("/get-all")
    public ResponseEntity<PackageRR> getAllPackages() {
        return ResponseEntity.ok(packageService.getAllPackages());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<PackageRR> getAllPackages(@PathVariable long id) {
        return ResponseEntity.ok(packageService.getPackageById(id));
    }

    @PostMapping("/new")
    public ResponseEntity<PackageRR> newPackage(@RequestBody PackageRR request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        return ResponseEntity.ok(packageService.addPackage(request, username));
    }

    @GetMapping("/get/my")
    public ResponseEntity<PackageRR> getUserPackages() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
       PackageRR response = packageService.getMyPackage(username);
       if(response.getPackageList().isEmpty()){
           return ResponseEntity.ok(response);
       }
       return ResponseEntity.ok(response);
    }

}
