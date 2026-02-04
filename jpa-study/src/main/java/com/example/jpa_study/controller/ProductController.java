package com.example.jpa_study.controller;

import com.example.jpa_study.domain.Product;
import com.example.jpa_study.repository.ProductRepository;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class ProductController {
    ProductRepository productRepository;
    // 1. 이름으로 찾기
    Product product = productRepository.findByName("노트북");

    // 2. 100만원 이상
    List<Product> expensive = productRepository
            .findByPriceGreaterThanEqual(1000000);

    // 3. 50만원~100만원
    List<Product> midRange = productRepository
            .findByPriceBetween(500000, 1000000);

    // 4. 이름에 "북" 포함
    List<Product> books = productRepository
            .findByNameContaining("북");

    // 5. 가격 높은 순 5개
    List<Product> top5 = productRepository
            .findTop5ByOrderByPriceDesc();
}