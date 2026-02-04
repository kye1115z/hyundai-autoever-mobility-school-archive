package com.example.book.repository;

import com.example.book.domain.Book;
import com.example.book.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    // 제목으로 검색
    List<Book> findByTitle(String title);

    List<Book> findAllByTitle(String title);

    // 제목에 키워드 포함
    List<Book> findByTitleContaining(String keyword);

    // 저자로 검색
    List<Book> findByAuthor(String author);

    // 가격 범위 검색
    List<Book> findByPriceBetween(Integer minPrice, Integer maxPrice);

    // 가격 초과
    List<Book> findByPriceGreaterThan(Integer price);

    // 가격 미만
    List<Book> findByPriceLessThan(Integer price);

    // 카테고리 검색
    List<Book> findByCategory(Category category);

    // ISBN 검색
    Optional<Book> findByIsbn(String isbn);

    // 저자 & 카테고리 검색
    List<Book> findByAuthorAndCategory(String author, Category category);

}
