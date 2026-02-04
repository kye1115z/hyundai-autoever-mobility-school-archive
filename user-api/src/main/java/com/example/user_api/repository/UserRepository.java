package com.example.user_api.repository;

import com.example.user_api.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // 이메일로 사용자 찾기
    boolean existsByEmail(String email);
}
