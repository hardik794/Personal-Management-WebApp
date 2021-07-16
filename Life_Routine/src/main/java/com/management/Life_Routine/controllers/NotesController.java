package com.management.Life_Routine.controllers;

import com.management.Life_Routine.models.User;
import com.management.Life_Routine.models.UserNotes;
import com.management.Life_Routine.services.NotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/notes")
@CrossOrigin("*")
public class NotesController {

    @Autowired
    private NotesService notesService;

    //add notes
    @PostMapping("/")
    public ResponseEntity<?> addNotes(@RequestBody UserNotes userNotes){
        UserNotes userNotes1 = this.notesService.addNotes(userNotes);
        return ResponseEntity.ok(userNotes1);
    }

    //update notes
    @PutMapping("/")
    public UserNotes updateNotes(@RequestBody UserNotes userNotes){
        return this.notesService.updateNotes(userNotes);
    }

    //delete notes
    @DeleteMapping("/{noteId}")
    public void deleteNotes(@PathVariable("noteId") Long noteId){
        this.notesService.deleteNotes(noteId);
    }

    //get notes
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUserNotes(@PathVariable("id") Long id){
        User user = new User();
        user.setId(id);
        Set<UserNotes> userNotes = this.notesService.getUserNotes(user);
        return ResponseEntity.ok(userNotes);
    }
}
