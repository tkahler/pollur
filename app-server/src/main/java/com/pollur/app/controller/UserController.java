package com.pollur.app.controller;

import com.pollur.app.domain.User;
import com.pollur.app.domain.dto.CreateUserReq;
import com.pollur.app.domain.dto.UserDTO;
import com.pollur.app.domain.exception.DuplicateUsernameException;
import com.pollur.app.domain.exception.ResourceNotFoundException;
import com.pollur.app.mapper.UserMapper;
import com.pollur.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @GetMapping("/users")
    public List<User> getUsers() {

        List<User> users = (List<User>) userRepository.findAll();
        return users;
    }

    @GetMapping("/user/{userId}")
    public UserDTO getUser(@PathVariable("userId") Long userId) {

        User user = userRepository.findById(userId).orElseThrow(ResourceNotFoundException::new);
        return UserMapper.userToDTO(user);
    }

    @PostMapping("/user")
    public UserDTO createUser(@RequestBody CreateUserReq createUserReq) {
        User user = new User(createUserReq.username, passwordEncoder.encode(createUserReq.password));

        userRepository.findByUsername(user.getUsername()).ifPresent(s -> {
            throw new DuplicateUsernameException();
        });
        userRepository.save(user);
        return new UserDTO(user.id, user.getUsername());
    }

}
