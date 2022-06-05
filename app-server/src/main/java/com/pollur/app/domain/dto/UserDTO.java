package com.pollur.app.domain.dto;

public class UserDTO {
    public Long id;
    public String username;

    public UserDTO() {

    }
    public UserDTO(Long userId, String username) {
        this.id = userId;
        this.username = username;
    }
}
