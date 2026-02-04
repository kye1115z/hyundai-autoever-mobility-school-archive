package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
public class FindingName {
    @ResponseBody
    @GetMapping("/user/{id}")
    public String findName(@PathVariable Long id) {
        String name = users.get(id);
        return name;
    }

    private final Map<Long, String> users = Map.of(
            1L, "김예은",
            2L, "김마태",
            3L, "김포리",
            4L, "김샤샤"
    );
}