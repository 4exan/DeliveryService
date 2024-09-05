package ua.kusakabe.delivery.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
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
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "who_receive", referencedColumnName = "id")
    @JsonIgnore
    private User whoReceive;
    private String dateReceive;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "who_load", referencedColumnName = "id")
    @JsonIgnore
    private User whoLoad;
    private String dateLoad;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "who_unload", referencedColumnName = "id")
    @JsonIgnore
    private User whoUnload;
    private String dateUnload;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "who_gave", referencedColumnName = "id")
    @JsonIgnore
    private User whoGave;
    private String dateGave;

}
