package ua.kusakabe.delivery.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/client")
public class UserController {

    @GetMapping("/active-package")
    public String getActivePackage() {
        return "GetActivePackage Page, Welcome!";
    }
}
