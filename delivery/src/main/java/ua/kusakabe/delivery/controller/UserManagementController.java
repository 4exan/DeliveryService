package ua.kusakabe.delivery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import ua.kusakabe.delivery.dto.UserRR;
import ua.kusakabe.delivery.service.UserManagementService;

@RestController
public class UserManagementController {

    @Autowired
    private UserManagementService userManagementService;

    @PostMapping("/auth/registration")
    public ResponseEntity<UserRR> register(@RequestBody UserRR req) {
        return ResponseEntity.ok(userManagementService.registerUser(req));
    }

    @PostMapping("/auth/login")
    public ResponseEntity<UserRR> login(@RequestBody UserRR req) {
        return ResponseEntity.ok(userManagementService.loginUser(req));
    }

    @PostMapping("/auth/refresh")
    public ResponseEntity<UserRR> refreshToken(@RequestBody UserRR req) {
        return ResponseEntity.ok(userManagementService.refreshToken(req));
    }

    @GetMapping("/admin/get-all-users")
    public ResponseEntity<UserRR> getAllUsers() {
        return ResponseEntity.ok(userManagementService.getAllUsers());
    }

    @GetMapping("/admin/get-user/{userId}")
    public ResponseEntity<UserRR> getUserById(@PathVariable int userId) {
        return ResponseEntity.ok(userManagementService.getUserById(userId));
    }

    @PutMapping("/admin/update/{userId}")
    public ResponseEntity<UserRR> updateUser(@PathVariable int userId, @RequestBody UserRR req) {
        return ResponseEntity.ok(userManagementService.updateUser(userId, req));
    }

    @DeleteMapping("/admin/delete/{userId}")
    public ResponseEntity<UserRR> deleteUser(@PathVariable int userId) {
        return ResponseEntity.ok(userManagementService.deleteUserById(userId));
    }

    @GetMapping("/cred/get-profile")
    public ResponseEntity<UserRR> getProfile() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        UserRR res = userManagementService.getMyInfo(username);
        return ResponseEntity.status(res.getStatusCode()).body(res);
    }

}
