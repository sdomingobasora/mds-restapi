package com.mdas.restapi.controller;

import com.mdas.restapi.model.Message;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/message")
    public Message message() {
        return new Message(counter.incrementAndGet(), "Hello, World!");
    }
}
