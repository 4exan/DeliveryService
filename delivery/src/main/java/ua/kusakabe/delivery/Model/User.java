package ua.kusakabe.delivery.Model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "users")
@Getter @Setter
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstname;
    private String middlename;
    private String lastname;
    private String phone;
    private String email;
    private String password;
    private String roles;

}
