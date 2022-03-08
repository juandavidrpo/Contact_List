package com.sofka.exception;

/**
 * Representa la clase excepción.
 * @version 1.0.0 2002-03-08
 * @author Juan David Rojas Restrepo
 * @since 1.0.0
 */
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class Exception extends RuntimeException {

    public Exception(String message) {
        super(message);
    }
}
