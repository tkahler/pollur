package com.pollur.app.service;

import com.pollur.app.domain.User;
import com.pollur.app.domain.exception.ResourceNotFoundException;
import com.pollur.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username));
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return user;
    }

    public User findById(Long userId) {
        return userRepository.findById(userId).orElseThrow(ResourceNotFoundException::new);
    }

}