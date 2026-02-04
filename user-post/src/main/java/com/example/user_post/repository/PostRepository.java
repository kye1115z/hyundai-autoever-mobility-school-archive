package com.example.user_post.repository;

import com.example.user_post.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    // 특정 유저의 모든 포스트 가져오기
    List<Post> findByUserId(Long userId);
}
