package com.management.Life_Routine.services.impl;

import com.management.Life_Routine.helper.UserFoundException;
import com.management.Life_Routine.models.User;
import com.management.Life_Routine.repo.UserRepository;
import com.management.Life_Routine.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    //creating user
    @Override
    public User createuser(User user) throws Exception {

        User local = this.userRepository.findByEmail(user.getEmail());
        User local1 = this.userRepository.findByUsername(user.getUsername());
        User local2 = this.userRepository.findByPhone(user.getPhone());

        if ( local != null){
            System.out.println("email already there !!");
            throw new UserFoundException("email already there !!");
        }
        else if(local1 != null){
            System.out.println("username already there !!");
            throw new UserFoundException("username already there !!");
        }
        else if(local2 != null){
            System.out.println("phone already there !!");
            throw new UserFoundException("phone already there !!");
        }
        else {
            //user create
            local = this.userRepository.save(user);
        }
        return local;
    }

    //getting user
    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    //delete user by id
    @Override
    public void deleteUser(Long id) {
        this.userRepository.deleteById(id);
    }

    @Override
    public User updateuser(User user) throws Exception {
        User local = this.userRepository.findByEmail(user.getEmail());
        User local1 = this.userRepository.findByUsername(user.getUsername());
        User local2 = this.userRepository.findByPhone(user.getPhone());

        if ( local != null){
            System.out.println("email already there !!");
            throw new UserFoundException("email already there !!");
        }
        else if(local1 != null){
            System.out.println("username already there !!");
            throw new UserFoundException("username already there !!");
        }
        else if(local2 != null){
            System.out.println("phone already there !!");
            throw new UserFoundException("phone already there !!");
        }
        else {
            //user create
            local = this.userRepository.save(user);
        }
        return local;
    }

//    @Override
//    public List<String> search(String keyword) {
//        return userRepository.search(keyword);
//    }
}
