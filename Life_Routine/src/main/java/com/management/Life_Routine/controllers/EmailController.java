package com.management.Life_Routine.controllers;

import com.management.Life_Routine.models.Contact;
import com.management.Life_Routine.models.User;
import com.management.Life_Routine.services.impl.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/email")
@CrossOrigin("*")
public class EmailController {

    @Autowired
    private EmailServiceImpl emailService;

    @PostMapping("/sendemail")
    public ResponseEntity<?> sendEmail(@RequestBody Contact contact){
        this.emailService.sendEmail(contact.getName(),contact.getSubject(),contact.getEmail(),contact.getMessage());
        return ResponseEntity.ok("Feedback Sent...");
    }
}
