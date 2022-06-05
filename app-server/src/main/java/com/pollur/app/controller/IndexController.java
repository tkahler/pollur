package com.pollur.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class IndexController {

    @GetMapping(value = "/")
    public String base() {
        return "index.html";
    }

    @GetMapping(value = "/home")
    public String home() {
        return "index.html";
    }

    @GetMapping(value = "/create-poll")
    public String createPoll() {
        return "index";
    }

    @GetMapping(value = "/user/**")
    public String userPage() {
        return "index";
    }

}