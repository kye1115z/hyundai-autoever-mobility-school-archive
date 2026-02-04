package com.example.user_post.controller;

import com.example.user_post.domain.Post;
import com.example.user_post.domain.User;
import com.example.user_post.dto.PostCreateRequest;
import com.example.user_post.repository.PostRepository;
import com.example.user_post.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostController {
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    @GetMapping
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @PostMapping
    public Post createPost(@RequestBody PostCreateRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("작성자를 찾을 수 없습니다."));

        Post post = new Post();
        post.setTitle(request.getTitle());
        post.setUser(user);

        return postRepository.save(post);
    }

    @GetMapping("/{postId}/author")
    public User getPostAuthor(@PathVariable Long postId) {
//        Post post = postRepository.findById(postId)
//                .orElseThrow(() -> new RuntimeException("포스트가 존재하지 않습니다."));
//        return userRepository.findById(post.getUserId())
//                .orElseThrow(() -> new RuntimeException("사용자가 존재하지 않습니다."));
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("포스트가 존재하지 않습니다."));
        return post.getUser();

    }

}
