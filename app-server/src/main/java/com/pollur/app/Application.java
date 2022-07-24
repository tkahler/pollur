package com.pollur.app;

import com.pollur.app.domain.poll.Poll;
import com.pollur.app.domain.User;
import com.pollur.app.repository.PollRepository;
import com.pollur.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.stream.Stream;

@SpringBootApplication
@EnableJpaAuditing(dateTimeProviderRef = "dateTimeProvider")
public class Application {

	@Autowired
	PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	CommandLineRunner init(UserRepository userRepository, PollRepository pollRepository) {
		return args -> {
			List<User> users = (List<User>) userRepository.findAll();
			if(users.size() == 0) {
				Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
					User user = new User(name, passwordEncoder.encode("1234"));
					user = userRepository.save(user);
					users.add(user);
				});

				for (User u: users) {
					for(int i =0; i <= 10; i++) {
						Poll poll = Poll.generateRandomPoll(u);
						pollRepository.save(poll);
					}
				}
			}
		};
	}

}
