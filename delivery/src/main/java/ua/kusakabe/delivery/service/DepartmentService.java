package ua.kusakabe.delivery.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.kusakabe.delivery.dto.DepartmentRR;
import ua.kusakabe.delivery.entity.Department;
import ua.kusakabe.delivery.entity.WorkingHours;
import ua.kusakabe.delivery.repository.DepartmentRepository;
import ua.kusakabe.delivery.repository.WorkingHoursRepository;

import java.util.List;

@Service
public class DepartmentService {

    @Autowired
    DepartmentRepository departmentRepository;
    @Autowired
    WorkingHoursRepository workingHoursRepository;

    public DepartmentRR getAllDepartments() {
        DepartmentRR response = new DepartmentRR();

        try {
            List<Department> allDepartments = departmentRepository.findAll();
            if (!allDepartments.isEmpty()) {
                response.setDepartments(allDepartments);
                response.setStatusCode(200);
                response.setMessage("All departments found");
            } else {
                response.setStatusCode(404);
                response.setMessage("No departments found");
            }
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage(e.getMessage());
        }

        return response;
    }

    public DepartmentRR getDepartmentByNumber(String id) {
        DepartmentRR response = new DepartmentRR();

        try {
            Department department = departmentRepository.findByNumber(id);
            if (department != null) {
                response.setDepartment(department);
                response.setStatusCode(200);
                response.setMessage("Department found");
            } else {
                response.setStatusCode(404);
                response.setMessage("Department not found");
            }
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage(e.getMessage());
        }
        return response;
    }

    public DepartmentRR addDepartment(DepartmentRR request) {
        DepartmentRR response = new DepartmentRR();

        try {
            WorkingHours findWorkingHours = workingHoursRepository.findById(request.getWorking_hours()).orElseThrow(() -> new RuntimeException("WorkingHours not found"));
            Department newDepartment = new Department();
            newDepartment.setNumber(request.getNumber());
            newDepartment.setAddress(request.getAddress());
            newDepartment.setType(request.getType());
            newDepartment.setWeight_restriction(request.getWeight_restriction());
            newDepartment.setDim_restriction_send(request.getDim_restriction_send());
            newDepartment.setDim_restriction_receive(request.getDim_restriction_receive());
            newDepartment.setServices(request.getServices());
            newDepartment.setWorkingHours(findWorkingHours);
            response.setDepartment(newDepartment);
            Department createdDep = departmentRepository.save(newDepartment);
            if (createdDep.getId() > 0) {
                response.setStatusCode(200);
                response.setMessage("Department created");
                response.setDepartment(createdDep);
            }
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage(e.getMessage());
        }
        return response;
    }


}
