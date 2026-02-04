package com.example.user_post.controller;

import com.example.user_post.domain.Post;
import com.example.user_post.domain.User;
import com.example.user_post.repository.PostRepository;
import com.example.user_post.repository.UserRepository;
import com.example.user_post.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/{userId}/posts")
    public List<Post> getUserPosts(@PathVariable Long userId) {
        return postRepository.findByUserId(userId);
    }

    @PutMapping("/{id}/username")
    public void updateUsername(@PathVariable Long id, @RequestParam String username) {
        userService.updateUsername(id, username);
    }
}
