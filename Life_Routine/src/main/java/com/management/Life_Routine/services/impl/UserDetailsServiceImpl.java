package com.management.Life_Routine.services.impl;

import com.management.Life_Routine.models.User;
import com.management.Life_Routine.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user =this.userRepository.findByUsername(username);
        if (user==null){
            throw new UsernameNotFoundException("No User Found !!");
        }

        return user;
    }
}
