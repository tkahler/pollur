package com.peakanime.app;

import com.peakanime.app.domain.User;
import com.peakanime.app.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.stream.Stream;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	CommandLineRunner init(UserRepository userRepository) {
		return args -> {
			List<User> users = (List<User>) userRepository.findAll();
			if(users.size() == 0) {
				Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
					User user = new User(name, name.toLowerCase() + "@domain.com");
					userRepository.save(user);
				});
			}
		};
	}

}
