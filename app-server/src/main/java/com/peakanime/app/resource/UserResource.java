package com.peakanime.app.resource;

import com.peakanime.app.domain.User;
import com.peakanime.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserResource {

    @Autowired
    private UserRepository userRepository;


    @GetMapping("/users")
    public List<User> getUsers() {

        List<User> users = (List<User>) userRepository.findAll();
        return users;
    }

}
