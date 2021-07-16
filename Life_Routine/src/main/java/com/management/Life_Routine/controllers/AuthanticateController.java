package com.management.Life_Routine.controllers;

import com.management.Life_Routine.config.JwtUtil;
import com.management.Life_Routine.helper.UserNotFoundException;
import com.management.Life_Routine.models.JwtRequest;
import com.management.Life_Routine.models.JwtResponse;
import com.management.Life_Routine.models.User;
import com.management.Life_Routine.services.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthanticateController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;

    @Autowired
    private JwtUtil jwtUtil;

    //generate token
    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {

        try {
            authanticate(jwtRequest.getUsername(),jwtRequest.getPassword());

        }catch (UserNotFoundException e){
            e.printStackTrace();
            throw new Exception("User not found");
        }

        //authanticate.....

        UserDetails userDetails= this.userDetailsServiceImpl.loadUserByUsername(jwtRequest.getUsername());
        String token = this.jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token));
    }

    private void authanticate(String username,String password) throws Exception {

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));

        }catch (DisabledException e){
            throw new Exception("USER DISABLED"+ e.getMessage());
        }catch (BadCredentialsException e){
            throw new Exception("Invalid Credentails" + e.getMessage());
        }
    }

    //return the details of current user
    @GetMapping("/current-user")
    public User getCurrentUser(Principal principal){
        return ((User) this.userDetailsServiceImpl.loadUserByUsername(principal.getName()));
    }
}
