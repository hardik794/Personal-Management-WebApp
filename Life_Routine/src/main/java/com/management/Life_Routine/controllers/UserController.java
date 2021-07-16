package com.management.Life_Routine.controllers;

import com.management.Life_Routine.helper.UserFoundException;
import com.management.Life_Routine.models.User;
import com.management.Life_Routine.models.UserNotes;
import com.management.Life_Routine.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    //creating user
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {

        //encoding password with Bcrypt
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
        return this.userService.createuser(user);
    }

    //get user
    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username){

        return this.userService.getUser(username);
    }

    //delete user
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Long id){
        this.userService.deleteUser(id);

    }

    //update user
    @PutMapping("/")
    public User updateuser(@RequestBody User user) throws Exception {
        return this.userService.updateuser(user);
    }

    //Exception Handling
    @ExceptionHandler(UserFoundException.class)
    public ResponseEntity<?> exceptionHandler(UserFoundException ex) {
        return ResponseEntity.ok(ex.getMessage());
    }

}
