package com.example.jpa_study.repository;

import com.example.jpa_study.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // 이름으로 상품 찾기
    Product findByName(String name);

    // 가격이 특정 금액 이상인 상품 찾기
    List<Product> findByPriceGreaterThanEqual(Integer price);

    // 가격이 특정 범위 사이인 상품 찾기
    List<Product> findByPriceBetween (Integer min, Integer max);

    // 이름에 특정 단어가 포함된 상품 찾기
    List<Product> findByNameContaining(String keyword);

    // 가격이 비싼 순으로 상위 5개 상품 찾기
    List<Product> findTop5ByOrderByPriceDesc();
}
