package com.example.user_post;

import com.example.user_post.domain.Comment;
import com.example.user_post.domain.Post;
import com.example.user_post.domain.User;
import com.example.user_post.repository.CommentRepository;
import com.example.user_post.repository.PostRepository;
import com.example.user_post.repository.UserRepository;
import org.h2.command.Command;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
class UserPostApplicationTests {

	@Autowired
	UserRepository userRepo;

	@Autowired
	PostRepository postRepo;

	@Autowired
	CommentRepository commentRepo;

	@Test
	@Transactional
	void 댓글_인과관계_테스트() {
//		// 1. 사용자 생성
//		User user = new User();
//		user.setName("김예은");
//		userRepo.save(user);
//		User created = userRepo.save(user);
//		System.out.println("사용자: " + created.getName());
//
//		// 2. 게시글 생성 및 작성자 연결
//		Post post = new Post();
//		post.setTitle("게시글 제목");
//		post.setUser(user);
//		postRepo.save(post);
//
//		// 3. 댓글 생성 및 게시글 연결
//		Comment comment = new Comment();
//		comment.setContent("첫 번째 댓글입니다!");
//		comment.setPost(post);
//		commentRepo.save(comment);
//
//		// 4. 조화 테스트
//		Comment foundComment = commentRepo.findById(comment.getId()).orElse(null);
//		System.out.println("댓글 내용: " + foundComment.getContent());
//		System.out.println("연결된 글 제목: " + foundComment.getPost().getTitle());
//		System.out.println("글 쓴 사람 이름: " + foundComment.getPost().getUser().getName());
	}
}
