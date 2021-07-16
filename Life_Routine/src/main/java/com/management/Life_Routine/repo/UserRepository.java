package com.management.Life_Routine.repo;

import com.management.Life_Routine.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    public  User findByEmail(String email);
    public  User findByUsername(String username);
    public  User findByPhone(String phone);

//    @Query(value = "select username from users where username like %:keyword%",nativeQuery = true)
//    public List<String> search(@Param("keyword") String keyword);
}
