    package com.example.user_api.controller;

    import com.example.user_api.domain.User;
    import com.example.user_api.service.UserService;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.util.List;

    @RestController
    @RequestMapping("/api/users")
    public class UserController {
        private final UserService userService;

        public UserController(UserService userService) {
            this.userService = userService;
        }

        // 회원가입
        @PostMapping
        public ResponseEntity<User> createUser(@RequestBody User user) {
            User created = userService.createUser(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(created);
        }

        //
//        @GetMapping
//        public ResponseEntity<User> getUserId(@RequestParam User user) {
//            User created = userService.createUser(user);
//
//            // 기존: "{id: name}"
//            // 400, 200, 201 코드마다 성공, 실패 등 이런 식으로 알려줌
//            return ResponseEntity.status(HttpStatus.CREATED).body(created);
//        }

        // 전체 조회
        @GetMapping
        public ResponseEntity<List<User>> getAllUsers() {
            List<User> users = userService.getAllUsers();
            return ResponseEntity.ok(users); // 200
        }

        // id로 조회하는 메서드
        @GetMapping("/{id}")
        public ResponseEntity<User> getUserById(@PathVariable Long id) {
            User user = userService.getUserById(id);
            return ResponseEntity.ok(user);
        }
    }
