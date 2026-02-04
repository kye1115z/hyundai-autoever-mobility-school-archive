package com.example.user_api_ver2.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class UserCreateRequest {
    private String name;
    private String email;
    private String password;
}
