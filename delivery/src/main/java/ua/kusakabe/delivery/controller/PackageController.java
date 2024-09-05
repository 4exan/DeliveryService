package ua.kusakabe.delivery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import ua.kusakabe.delivery.dto.PackageRR;
import ua.kusakabe.delivery.dto.UserRR;
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

    @PutMapping("/edit/{packageId}")
    public ResponseEntity<PackageRR> editPackage(@PathVariable long packageId, @RequestBody PackageRR req) {
        return ResponseEntity.ok(packageService.editPackage(packageId, req));
    }

    @PutMapping("/status/{packageId}")
    public ResponseEntity<PackageRR> nextStatus(@PathVariable long packageId, @RequestBody PackageRR req) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        return ResponseEntity.ok(packageService.setNextPackageStatus(packageId, req, username));
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
        return ResponseEntity.ok(response);
    }

}
