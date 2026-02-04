package com.example.user_api2.service;

import com.example.user_api2.domain.User;
import com.example.user_api2.dto.UserCreateRequest;
import com.example.user_api2.dto.UserResponse;

import java.util.List;

public interface UserService {
    public List<UserResponse> findAll();

    public UserResponse findById(Long id);

    public UserResponse create(UserCreateRequest user);

    public UserResponse update(Long id, UserCreateRequest user);

    public void delete(Long id);
}