package ua.kusakabe.delivery.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ua.kusakabe.delivery.dto.UserRR;
import ua.kusakabe.delivery.entity.User;
import ua.kusakabe.delivery.repository.UserRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class UserManagementService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JWTUtils jwtUtils;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserRR registerUser(UserRR registrationRequest) {
        UserRR res = new UserRR();

        try {
            User user = new User();
            user.setUsername(registrationRequest.getUsername());
            user.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
            user.setName(registrationRequest.getName());
            user.setEmail(registrationRequest.getEmail());
            user.setPhone(registrationRequest.getPhone());
            user.setRole(registrationRequest.getRole());
            User userResult = userRepository.save(user);
            if (userResult.getId() > 0) {
                res.setUser(userResult);
                res.setMessage("User registered successfully");
                res.setStatusCode(200);
            }

        } catch (Exception e) {
            res.setStatusCode(500);
            res.setError(e.getMessage());
        }
        return res;
    }

    public UserRR loginUser(UserRR loginRequest) {
        UserRR res = new UserRR();

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    loginRequest.getUsername(),
                    loginRequest.getPassword()));
            var user = userRepository.findByUsername(loginRequest.getUsername()).orElseThrow();
            var jwt = jwtUtils.generateToken(user);
            var refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), user);
            res.setStatusCode(200);
            res.setToken(jwt);
            res.setRole(user.getRole());
            res.setRefreshToken(refreshToken);
            res.setExpirationTime("24Hrs");
            res.setMessage("User logged in successfully");
        } catch (Exception e) {
            res.setStatusCode(500);
            res.setError(e.getMessage());
        }
        return res;
    }

    public UserRR refreshToken(UserRR refreshTokenRequest) {
        UserRR res = new UserRR();

        try {
            String username = jwtUtils.extractUsername(refreshTokenRequest.getToken());
            User user = userRepository.findByUsername(username).orElseThrow();
            if (jwtUtils.isTokenValid(refreshTokenRequest.getToken(), user)) {
                var jwt = jwtUtils.generateToken(user);
                res.setStatusCode(200);
                res.setToken(jwt);
                res.setRefreshToken(refreshTokenRequest.getToken());
                res.setExpirationTime("24Hrs");
                res.setMessage("Token refreshed successfully");
            }
            res.setStatusCode(200);
            return res;
        } catch (Exception e) {
            res.setStatusCode(500);
            res.setError(e.getMessage());
        }
        return res;
    }

    public UserRR getAllUsers() {
        UserRR res = new UserRR();

        try {
            List<User> users = userRepository.findAll();
            if (!users.isEmpty()) {
                res.setUserList(users);
                res.setStatusCode(200);
                res.setMessage("All users load successfully");
            } else {
                res.setStatusCode(404);
                res.setMessage("No users found");
            }
            return res;
        } catch (Exception e) {
            res.setStatusCode(500);
            res.setError(e.getMessage());
            return res;
        }

    }

    public UserRR getUserById(int id) {
        UserRR res = new UserRR();

        try {
            User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("No user found"));
            res.setUser(user);
            res.setStatusCode(200);
            res.setMessage("User with id: " + id + " loaded successfully");
        } catch (Exception e) {
            res.setStatusCode(500);
            res.setError(e.getMessage());
        }
        return res;
    }

    public UserRR deleteUserById(int id) {
        UserRR res = new UserRR();

        try {
            Optional<User> user = userRepository.findById(id);
            if (user.isPresent()) {
                userRepository.delete(user.orElseThrow());
                res.setStatusCode(200);
                res.setMessage("User with id: " + id + " deleted successfully");
            } else {
                res.setStatusCode(404);
                res.setMessage("No user found");
            }
        } catch (Exception e) {
            res.setStatusCode(500);
            res.setMessage(e.getMessage());
        }
        return res;
    }

    public UserRR updateUser(int id, UserRR updateRequest) {
        UserRR res = new UserRR();

        try {
            Optional<User> user = userRepository.findById(id);
            if (user.isPresent()) {
                User existingUser = user.get();
                existingUser.setUsername(updateRequest.getUsername());
                existingUser.setName(updateRequest.getName());
                existingUser.setEmail(updateRequest.getEmail());
                existingUser.setPhone(updateRequest.getPhone());
                existingUser.setRole(updateRequest.getRole());
                if (updateRequest.getPassword() != null && !updateRequest.getPassword().isEmpty()) {
                    existingUser.setPassword(passwordEncoder.encode(updateRequest.getPassword()));
                }
                User saveduser = userRepository.save(existingUser);
                res.setUser(saveduser);
                res.setStatusCode(200);
                res.setMessage("User with id: " + id + " updated successfully");
            } else {
                res.setStatusCode(404);
                res.setMessage("No user found");
            }
        } catch (Exception e) {
            res.setStatusCode(500);
            res.setError(e.getMessage());
        }
        return res;
    }

    public UserRR getMyInfo(String username){
        UserRR res = new UserRR();

        try{
            Optional<User> user = userRepository.findByUsername(username);
            if(user.isPresent()){
                res.setUser(user.get());
                res.setStatusCode(200);
                res.setMessage("Successful!");
            }else{
                res.setStatusCode(404);
                res.setMessage("No user found");
            }
        }catch (Exception e){
            res.setStatusCode(500);
            res.setError(e.getMessage());
        }
        return res;
    }

}
