package com.sofka.controller;

import com.sofka.domain.Contact;
import com.sofka.exception.Exception;
import com.sofka.service.ContactRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin("*")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping(path = "/contacts")
    public List<Contact> getAllContacts(){
        return contactRepository.findAll();
    }

    @PostMapping(path = "/contact")
    public ResponseEntity<Contact> create(@RequestBody Contact contact) {
        log.info("Contacto a crear: {}", contact);
        contactRepository.save(contact);
        return new ResponseEntity<>(contact, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/contact/{id}")
    public ResponseEntity<Contact> delete(Contact contact) {
        log.info("Contacto a borrar: {}", contact);
        contactRepository.delete(contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @GetMapping("/contacts/{id}")
    public ResponseEntity<Contact> getContactById(@PathVariable long id){
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new Exception("Contacto no existe:" + id));
        return ResponseEntity.ok(contact);
    }

    @PutMapping("/contact")
    public Contact updateEmployee(@RequestBody Contact contact) {
        log.info("Contacto actualizado: {}", contact);
        return contactRepository.save(contact);
    }
}
