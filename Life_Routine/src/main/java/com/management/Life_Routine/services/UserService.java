package com.management.Life_Routine.services;

import com.management.Life_Routine.models.User;


public interface UserService {

    //create user
    public User createuser(User user) throws Exception;

    //get username
    public User getUser(String username);

    //delete user by id
    public void  deleteUser(Long id);

    //update user
    public User updateuser(User user) throws Exception;

    //search username
//    public List<String> search(String keyword);

}
