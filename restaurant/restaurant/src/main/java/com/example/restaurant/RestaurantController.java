package com.example.restaurant;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class RestaurantController {
    private List<Restaurant> restaurants = new ArrayList<>();
    private Long nextId = 1L;

    public RestaurantController() {
        restaurants.add(new Restaurant(
                nextId++,
                "구내식당",
                "매일 다름",
                "강의실 건물 1층",
                "메뉴1, 메뉴2",
                "저렴하고 무난함"
        ));
        restaurants.add(new Restaurant(
                nextId++,
                "라홍방",
                "중식",
                "강의실 건물 밎은 편 지하 1층",
                "마라탕",
                "다양한 재료"
        ));
        restaurants.add(new Restaurant(
                nextId++,
                "김밥천국",
                "한식",
                "가산역 방면 100미터",
                "제육덮밥",
                "저렴하지만 맛있음"
        ));
    }

    // Get /restaurants - 음식점 목록 페이지
    @GetMapping("/restaurants")
    public String list(Model model) {
        model.addAttribute("restaurants", restaurants);
        return "list";
    }

    // Get /restaurants/random
    @GetMapping("/restaurants/random")
    public String random(Model model) {
        int randomIndex = (int) (Math.random() * restaurants.size());
        Restaurant randomRestaurant = restaurants.get(randomIndex);

        model.addAttribute("restaurant", randomRestaurant);
        return "random";
    }

    // Get /restaurants/new - 추가 폼 페이지
    @GetMapping("/restaurants/new")
    public String newForm() {
        return "form";
    }

    // Post /restaurants - 음식점 저장
    @PostMapping("/restaurants")
    public String create(Restaurant restaurant) {
        restaurant.setId(nextId++);
        restaurants.add(restaurant);

        return "redirect:/restaurants";
    }
}
