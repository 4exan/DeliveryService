package ua.kusakabe.delivery.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "packages")
@Data
public class Package {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_username", referencedColumnName = "username", nullable = false)
    private User creator;
    private String creation_date;
    private String senderName;
    private String senderPhone;
    @ManyToOne
    @JoinColumn(name = "sender_department_number")
    private Department senderDepartment;
    private String packageType;
    private String packageDescription;
    private String packagePrice;
    private String packageParams;
    private String recipientName;
    private String recipientPhone;
    @ManyToOne
    @JoinColumn(name = "recipient_department_number")
    private Department recipientDepartment;
    private String status;

}
