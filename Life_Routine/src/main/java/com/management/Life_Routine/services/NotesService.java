package com.management.Life_Routine.services;

import com.management.Life_Routine.models.User;
import com.management.Life_Routine.models.UserNotes;

import java.util.Set;

public interface NotesService {

    public UserNotes addNotes(UserNotes userNotes);
    public UserNotes updateNotes(UserNotes userNotes);
    public void deleteNotes(Long userNotesId);

    public Set<UserNotes> getUserNotes(User user);
}
