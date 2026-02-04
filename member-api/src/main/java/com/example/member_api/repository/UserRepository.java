package com.example.member_api.repository;

import com.example.member_api.domain.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
    User save(User user);

    List<User> findAll();

    Optional<User> findById(Long id);

    boolean existsByEmail(String email);
}
