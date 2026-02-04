package com.example.user_post.service;

import com.example.user_post.domain.User;
import com.example.user_post.repository.UserRepository;
import lombok.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public void updateUsername(Long id, String newName) {
        User user = userRepository.findById(id).get();
        user.setName(newName);
    }
}
