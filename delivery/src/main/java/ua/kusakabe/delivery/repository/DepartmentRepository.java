package ua.kusakabe.delivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ua.kusakabe.delivery.entity.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer> {
    Department findByNumber(String number);
}
