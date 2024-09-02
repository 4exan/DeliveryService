package ua.kusakabe.delivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ua.kusakabe.delivery.entity.WorkingHours;

@Repository
public interface WorkingHoursRepository extends JpaRepository<WorkingHours, Integer> {
}
