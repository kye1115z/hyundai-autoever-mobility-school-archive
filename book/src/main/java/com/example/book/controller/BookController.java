package com.example.book.controller;

import com.example.book.domain.Book;
import com.example.book.domain.Category;
import com.example.book.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {
    private final BookRepository bookRepository;

    // 도서 등록
    @PostMapping
    public Book create(@RequestBody Book book) {
        System.out.println("저장 전 ID: " + book.getId());

        Book saved = bookRepository.save(book);

        System.out.println("저장 후 ID: " + saved.getId());
        System.out.println("원본 ID: " + book.getId());
        return bookRepository.save(book);
    }

    // 전체 조회
    @GetMapping
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    // 단건 조회
    @GetMapping("/{id}")
    public Book findById(@PathVariable Long id) {
        return bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found: " + id));
    }

    // 수정
    @PutMapping("/{id}")
    public Book update(@PathVariable Long id, @RequestBody Book book) {
        Book existing = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found: " + id));

        existing.setTitle(book.getTitle());
        existing.setAuthor(book.getAuthor());
        existing.setIsbn(book.getIsbn());
        existing.setPrice(book.getPrice());
        existing.setCategory(book.getCategory());
        existing.setStock(book.getStock());
        existing.setDescription(book.getDescription());
        existing.setPublisher(book.getPublisher());
        return bookRepository.save(existing);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        bookRepository.deleteById(id);
    }

    // 제목으로 검색
    @GetMapping("/search/title")
    public List<Book> searchByTitle(@RequestParam String title) {
        return bookRepository.findByTitle(title);
    }

    @GetMapping("/search/title2")
    public List<Book> searchByTitle2(@RequestParam String title) {
        return bookRepository.findAllByTitle(title);
    }

    // 제목 키워드로 검색
    @GetMapping("/search/keyword")
    public List<Book> searchByKeyword(@RequestParam String keyword) {
        return bookRepository.findByTitleContaining(keyword);
    }

    // 저자로 검색
    @GetMapping("/search/author")
    public List<Book> searchByAuthor(@RequestParam String author) {
        return bookRepository.findByAuthor(author);
    }

    // 가격 범위
    @GetMapping("/search/price")
    public List<Book> searchByPrice(@RequestParam Integer min, @RequestParam Integer max) {
        return bookRepository.findByPriceBetween(min, max);
    }

    // 가격 초과
    @GetMapping("/search/price-greater")
    public List<Book> searchByPriceGreater(@RequestParam Integer price) {
        return bookRepository.findByPriceGreaterThan(price);
    }

    // 가격 미만
    @GetMapping("/search/price-less")
    public List<Book> searchByPriceLess(@RequestParam Integer price) {
        return bookRepository.findByPriceLessThan(price);
    }

    // 카테고리 검색
    @GetMapping("/search/category")
    public List<Book> searchByCategory(@RequestParam Category category) {
        return bookRepository.findByCategory(category);
    }

    // isbn 검색
    @GetMapping("/search/isbn/{isbn}")
    public Book searchByIsbn(@PathVariable String isbn) {
        Optional<Book> result = bookRepository.findByIsbn(isbn);

        if (result.isPresent()) {
            System.out.println("책 찾음: " + result.get().getTitle());
            return result.get();
        } else {
            System.out.println("책 없음: " + isbn);
            throw new RuntimeException("Book not found with ISBN: " + isbn);
        }
    }

    // 저자 & 카테고리 검색
    @GetMapping("/search/author-category")
    public List<Book> searchByAuthorAndCategory(@RequestParam String author, @RequestParam Category category) {
        return bookRepository.findByAuthorAndCategory(author, category);
    }
}
