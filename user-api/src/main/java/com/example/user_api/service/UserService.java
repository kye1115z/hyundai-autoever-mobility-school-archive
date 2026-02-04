package com.example.user_api.service;

import com.example.user_api.domain.User;
import com.example.user_api.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    // 생성자 (의존성 주입)
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 회원가입
    public User createUser(User user) {
        // 이메일 중복 체크
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다.");
        }

        // 저장
        return userRepository.save(user);
    }

    // 전체 조회
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // id로 조회
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));
    }
}
