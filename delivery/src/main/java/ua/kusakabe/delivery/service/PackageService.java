package ua.kusakabe.delivery.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.kusakabe.delivery.dto.PackageRR;
import ua.kusakabe.delivery.entity.Department;
import ua.kusakabe.delivery.entity.Package;
import ua.kusakabe.delivery.entity.User;
import ua.kusakabe.delivery.repository.DepartmentRepository;
import ua.kusakabe.delivery.repository.PackageRepository;
import ua.kusakabe.delivery.repository.UserRepository;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;


@Service
public class PackageService {

    @Autowired
    PackageRepository packageRepository;
    @Autowired
    DepartmentRepository departmentRepository;
    @Autowired
    private UserRepository userRepository;


    public PackageRR getAllPackages() {
        PackageRR response = new PackageRR();

        try {
            List<Package> allPackages = packageRepository.findAll();
            if (allPackages.size() > 0) {
                response.setStatusCode(200);
                response.setMessage("Successfully retrieved all packages");
                response.setPackageList(allPackages);
            } else {
                response.setStatusCode(404);
                response.setMessage("No packages found");
            }
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage(e.getMessage());
        }
        return response;
    }

    public PackageRR getPackageBySenderName(String senderName) {
        PackageRR response = new PackageRR();

        try {
            List<Package> userPackages = packageRepository.findBySenderName(senderName);
            if (userPackages.size() > 0) {
                response.setStatusCode(200);
                response.setMessage("Successfully retrieved package by sender name");
                response.setPackageList(userPackages);
            }
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage(e.getMessage());
        }
        return response;
    }

    public PackageRR getPackageById(long id) {
        PackageRR response = new PackageRR();

        try {
            Package packageById = packageRepository.findById(id).orElseThrow();
            if (packageById != null) {
                response.setStatusCode(200);
                response.setMessage("Package load successful");
                response.setUpackage(packageById);
            } else {
                response.setStatusCode(404);
                response.setMessage("Package not found");
            }
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage(e.getMessage());
        }
        return response;
    }

    public PackageRR addPackage(PackageRR request, String username) {
        PackageRR response = new PackageRR();
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());

        try {
            Package newPackage = new Package();
            Department senderDepartment = departmentRepository.findByNumber(request.getSender_department());
            Department recipientDepartment = departmentRepository.findByNumber(request.getRecipient_department());
            if (senderDepartment == null && recipientDepartment == null) {
                response.setStatusCode(400);
                response.setMessage("Sender department or recipient department not found");
                response.setUpackage(request.getUpackage());
                return response;
            }
            User findUser = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));
            newPackage.setCreator(findUser);
            newPackage.setCreation_date(timeStamp);
            newPackage.setSenderName(request.getSender_name());
            newPackage.setSenderPhone(request.getSender_phone());
            newPackage.setSenderDepartment(senderDepartment);
            newPackage.setPackageType(request.getPackage_type());
            newPackage.setPackageDescription(request.getPackage_description());
            newPackage.setPackagePrice(request.getPackage_price());
            newPackage.setPackageParams(request.getPackage_params());
            newPackage.setRecipientName(request.getRecipient_name());
            newPackage.setRecipientPhone(request.getRecipient_phone());
            newPackage.setRecipientDepartment(recipientDepartment);
            newPackage.setStatus(request.getStatus());
            Package resultPackage = packageRepository.save(newPackage);
            if (resultPackage.getId() > 0) {
                response.setStatusCode(200);
                response.setMessage("Package added successfully");
                response.setUpackage(resultPackage);
            } else {
                response.setStatusCode(404);
                response.setMessage("Error adding package");
            }
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage(e.getMessage());
        }
        return response;
    }

    public PackageRR getMyPackage(String username) {
        PackageRR response = new PackageRR();

        try {
            List<Package> packages = packageRepository.findByCreatorUsername(username);
            if (packages != null) {
                response.setPackageList(packages);
                response.setStatusCode(200);
                response.setMessage("User packages loaded successfully!");
            } else {
                response.setStatusCode(404);
                response.setMessage("No packages found");
            }
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setError(e.getMessage());
        }
        return response;
    }

    public PackageRR editPackage(long packageId, PackageRR request) {
        PackageRR response = new PackageRR();

        try {
            Department senderDepartment = departmentRepository.findByNumber(request.getSender_department());
            Department recipientDepartment = departmentRepository.findByNumber(request.getRecipient_department());
            Package oldPackage = packageRepository.findById(packageId).orElseThrow(() -> new RuntimeException("Package not found"));
            oldPackage.setSenderName(request.getSender_name());
            oldPackage.setSenderPhone(request.getSender_phone());
            oldPackage.setSenderDepartment(senderDepartment);
            oldPackage.setPackageType(request.getPackage_type());
            oldPackage.setPackageDescription(request.getPackage_description());
            oldPackage.setPackagePrice(request.getPackage_price());
            oldPackage.setPackageParams(request.getPackage_params());
            oldPackage.setRecipientName(request.getRecipient_name());
            oldPackage.setRecipientPhone(request.getRecipient_phone());
            oldPackage.setRecipientDepartment(recipientDepartment);
            Package savedPackage = packageRepository.save(oldPackage);
            if (savedPackage.getId() > 0) {
                response.setStatusCode(200);
                response.setMessage("Package with id: " + packageId + " updated successfully!");
                response.setUpackage(savedPackage);
            }
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage(e.getMessage());
        }
        return response;
    }

    public PackageRR setNewPackageStatus() {
        PackageRR response = new PackageRR();

        try {

        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage(e.getMessage());
        }
        return null;
    }

}
