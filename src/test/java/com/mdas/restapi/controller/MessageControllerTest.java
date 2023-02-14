package com.mdas.restapi.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.mdas.restapi.model.Message;
import org.junit.jupiter.api.Test;

public class MessageControllerTest {

    private final MessageController controller = new MessageController();

    @Test
    public void shouldReturnNewFirstMessage() {
        Message message = controller.message();

        assertEquals(message.id(), 1);
        assertEquals(message.body(), "Hello, World!");
    }

    @Test
    public void shouldReturnTheThirdMessage() {
        controller.message();
        Message message = controller.message();

        assertEquals(message.id(), 2);
        assertEquals(message.body(), "Hello, World!");
    }
}
