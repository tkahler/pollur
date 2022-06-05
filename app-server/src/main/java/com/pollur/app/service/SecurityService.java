package com.pollur.app.service;

import com.pollur.app.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

@Service
public class SecurityService {

    @Autowired
    UserService userService;

    //returns the id of the user who authenticated the current request
    //if request was not authenticated returns null
    public User getAuthenticatedUser() {
        Object jwt = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(jwt instanceof Jwt) {
            Long userId = (Long) ((Jwt) jwt).getClaims().get("userId");
            return userService.findById(userId);
        } else {
            return null;
        }
    }
}
