package com.example.member_api.repository;

import com.example.member_api.domain.User;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class MemoryUserRepository implements UserRepository {
    private final Map<Long, User> store = new ConcurrentHashMap<>();
    private final AtomicLong sequence = new AtomicLong(0);

    public MemoryUserRepository() {
        System.out.println("===== MemoryUserRepository 빈 생성됨 =====");
    }

    @Override
    public User save(User user) {
        if (user.getId() == null) {
            user.setId(sequence.incrementAndGet());
        }
        store.put(user.getId(), user);
        System.out.println("메모리에 저장: " + user.getName());
        return user;
    }

    @Override
    public List<User> findAll() {
        return new ArrayList<>(store.values());
    }

    @Override
    public Optional<User> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public boolean existsByEmail(String email) {
        return store.values().stream().anyMatch(user -> user.getEmail().equals(email));
    }

}
