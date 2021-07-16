package com.management.Life_Routine.repo;

import com.management.Life_Routine.models.User;
import com.management.Life_Routine.models.UserNotes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface NotesRepository extends JpaRepository<UserNotes , Long> {

    Set<UserNotes> findByUser(User user);
}
