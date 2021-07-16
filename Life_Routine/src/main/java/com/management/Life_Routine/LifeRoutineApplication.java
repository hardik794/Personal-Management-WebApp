package com.management.Life_Routine;

import com.management.Life_Routine.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class LifeRoutineApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(LifeRoutineApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

//		User user = new User();
//		user.setUsername("hardik123");
//		user.setFirstname("hardik");
//		user.setLastname("savaliya");
//		user.setEmail("hardik123@gmail.com");
//		user.setPhone("9316233041");
//		user.setGender("male");
//		user.setPassword(this.bCryptPasswordEncoder.encode("hardik123"));

//
//		User user1 = this.userService.createuser(user);
//		System.out.println(user1.getEmail());
	}
}
