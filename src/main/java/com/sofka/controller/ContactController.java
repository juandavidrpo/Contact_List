package com.sofka.controller;

import com.sofka.domain.Contact;
import com.sofka.service.ContactService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin("*")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @GetMapping(path = "/contacts")
    public List<Contact> list() {
        var contacts = contactService.list();
        return contacts;
    }

    @PostMapping(path = "/contact")
    public ResponseEntity<Contact> create(@RequestBody Contact contact) {
        log.info("Contacto a crear: {}", contact);
        contactService.save(contact);
        return new ResponseEntity<>(contact, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/contact/{id}")
    public ResponseEntity<Contact> delete(Contact contact) {
        log.info("Contacto a borrar: {}", contact);
        contactService.delete(contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

   // @PutMapping(path = "/contact/{id}")
   // public ResponseEntity<Contact> update(@RequestBody Contact contact, @PathVariable("id") Long id) {
   //     log.info("Contacto a modificar: {}", contact);
    //    contactService.update(id, contact);
      //  return new ResponseEntity<>(contact, HttpStatus.OK);
   // }



    @PutMapping("/contact")
    public Contact updateContact(@RequestBody Contact contact) {
        return contactService.save(contact);
    }

    @PatchMapping(path = "/contact/name/{id}")
    public ResponseEntity<Contact> updateName(Contact contact, @PathVariable("id") Long id) {
        log.info("Contacto a modificar: {}", contact);
        contactService.updateName(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @PatchMapping(path = "/contact/phone/{id}")
    public ResponseEntity<Contact> updatePhone(Contact contact, @PathVariable("id") Long id) {
        log.info("Contacto a modificar: {}", contact);
        contactService.updatePhone(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @PatchMapping(path = "/contact/email/{id}")
    public ResponseEntity<Contact> updateEmail(Contact contact, @PathVariable("id") Long id) {
        log.info("Contacto a modificar: {}", contact);
        contactService.updateEmail(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @PatchMapping(path = "/contact/dateBirth/{id}")
    public ResponseEntity<Contact> updateDateBirth(Contact contact, @PathVariable("id") Long id) {
        log.info("Contacto a modificar: {}", contact);
        contactService.updateDateBirth(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }
}
