package com.management.Life_Routine.services.impl;

import com.management.Life_Routine.models.User;
import com.management.Life_Routine.models.UserNotes;
import com.management.Life_Routine.repo.NotesRepository;
import com.management.Life_Routine.services.NotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class NotesServiceImpl implements NotesService {

    @Autowired
    private NotesRepository notesRepository;

    @Override
    public UserNotes addNotes(UserNotes userNotes) {
        return this.notesRepository.save(userNotes);
    }

    @Override
    public UserNotes updateNotes(UserNotes userNotes) {
        return this.notesRepository.save(userNotes);
    }

    @Override
    public void deleteNotes(Long userNotesId) {
//        UserNotes userNotes = new UserNotes();
//        userNotes.setNoteId(userNotesId);
        this.notesRepository.deleteById(userNotesId);
    }

    @Override
    public Set<UserNotes> getUserNotes(User user) {
        return this.notesRepository.findByUser(user);
    }
}
