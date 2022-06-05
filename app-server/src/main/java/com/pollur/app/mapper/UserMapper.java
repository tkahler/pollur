package com.pollur.app.mapper;

import com.pollur.app.domain.User;
import com.pollur.app.domain.dto.UserDTO;

public class UserMapper {

    public static UserDTO userToDTO(User user) {
        if(user != null) {
            return new UserDTO(user.id, user.getUsername());
        } else {
            return new UserDTO();
        }
    }
}
