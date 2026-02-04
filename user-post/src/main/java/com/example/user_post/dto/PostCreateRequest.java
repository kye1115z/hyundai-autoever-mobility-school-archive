package com.example.user_post.dto;

import lombok.*;

@Getter
@Setter
public class PostCreateRequest {
    private String title;
    private Long userId;
}
