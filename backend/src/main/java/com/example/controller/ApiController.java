package com.example.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/test")
    public String test() {
        return "Backend Working!";
    }
}
