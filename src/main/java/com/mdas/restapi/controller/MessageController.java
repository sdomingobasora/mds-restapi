package com.mdas.restapi.controller;

import com.mdas.restapi.model.Message;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

@RestController
public class MessageController {

    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/message")
    public Message message() {
        return new Message(counter.incrementAndGet(), "Hello, World!");
    }
}
