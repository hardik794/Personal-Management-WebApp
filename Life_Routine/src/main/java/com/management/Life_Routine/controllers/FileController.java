package com.management.Life_Routine.controllers;

import com.management.Life_Routine.models.User;
import com.management.Life_Routine.models.UserFile;
import com.management.Life_Routine.services.FilesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/files")
@CrossOrigin("*")
public class FileController {

    @Autowired
    private FilesService filesService;

    //add files
    @PostMapping("/")
    public ResponseEntity<?> addFiles(@RequestBody UserFile userFile){
        UserFile userFile1 = this.filesService.addFiles(userFile);
        return ResponseEntity.ok(userFile1);
    }

    //delete files
    @DeleteMapping("/{fileId}")
    public void deleteFiles(@PathVariable("fileId") Long fileId){
        this.filesService.deleteFiles(fileId);
    }

    //get user files
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUserFiles(@PathVariable("id") Long id){
        User user = new User();
        user.setId(id);
        Set<UserFile> userFiles = this.filesService.getallFiles(user);
        return ResponseEntity.ok(userFiles);
    }
}
