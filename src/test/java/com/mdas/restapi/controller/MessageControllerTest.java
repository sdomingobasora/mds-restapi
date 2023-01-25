package com.mdas.restapi.controller;

import com.mdas.restapi.model.Message;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class MessageControllerTest {

    private final MessageController controller = new MessageController();

    @Test
    public void shouldReturnANewFirstMessage() {
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
