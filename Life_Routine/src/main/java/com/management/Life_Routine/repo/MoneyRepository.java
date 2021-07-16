package com.management.Life_Routine.repo;

import com.management.Life_Routine.models.MoneyRecord;
import com.management.Life_Routine.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface MoneyRepository extends JpaRepository<MoneyRecord , Long> {

    Set<MoneyRecord> findByUsermoney(User user);
}
