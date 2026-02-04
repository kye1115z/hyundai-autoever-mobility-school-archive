package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Calculator {
    @ResponseBody
    @GetMapping("/add")
    public int add(@RequestParam int num1, @RequestParam int num2) {
        return num1 + num2;
    }

    @ResponseBody
    @GetMapping("/sub")
    public int sub(@RequestParam int num1, @RequestParam int num2) {
        return Integer.parseInt(num1 + " - " + num2 + " = " + (num1 - num2));
    }

    // mul 경로로 요청이 오면 x와 y 파라미터를 받아서 곱셈 결과를 반환하는 메서드
    @ResponseBody
    @GetMapping("/mul")
    public int mul(@RequestParam int x, @RequestParam int y) {
        return x * y;
    }
}

