package com.management.Life_Routine.repo;

import com.management.Life_Routine.models.User;
import com.management.Life_Routine.models.UserFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface FilesRepository extends JpaRepository<UserFile , Long> {

    Set<UserFile> findByUsers(User users);
}
