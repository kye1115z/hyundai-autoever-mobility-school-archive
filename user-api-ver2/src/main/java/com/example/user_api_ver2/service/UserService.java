package com.example.user_api_ver2.service;

import com.example.user_api_ver2.domain.User;
import com.example.user_api_ver2.dto.UserCreateRequest;
import com.example.user_api_ver2.dto.UserResponse;

import java.util.List;

public interface UserService {
    List<UserResponse> findAll();

    UserResponse findById(Long id);

    UserResponse create(UserCreateRequest request);

    UserResponse update(Long id, UserCreateRequest request);

    void delete(Long id);

    List<UserResponse> findByEmail(String email);
}
