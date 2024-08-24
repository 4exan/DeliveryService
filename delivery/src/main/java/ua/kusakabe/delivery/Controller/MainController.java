package ua.kusakabe.delivery.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ua.kusakabe.delivery.Model.User;
import ua.kusakabe.delivery.Service.UserService;

@RestController
@RequiredArgsConstructor
public class MainController {

    private final UserService userService;

    @PostMapping("/registration")
    public ResponseEntity<User> registration(@RequestBody User user) {
        System.out.println("New user!");
        User saveduser = userService.save(user);
        return new ResponseEntity<>(saveduser, HttpStatus.CREATED);
    }

}
