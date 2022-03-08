package com.sofka.controller;

/**
 * Representa la clase contacto controlador
 * @version 1.0.0 2002-03-08
 * @author Juan David Rojas Restrepo
 * @since 1.0.0
 */

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
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    /**
     * Representa el método para listar los contactos.
     * @return los contactos.
     */
    @GetMapping(path = "/contacts")
    public List<Contact> getAllContacts(){
        return contactRepository.findAll();
    }

    /**
     * Representa el método para agregar contactos nuevos.
     * @param contact de tipo String.
     * @return los contactos agregados.
     */
    @PostMapping(path = "/contact")
    public ResponseEntity<Contact> create(@RequestBody Contact contact) {
        log.info("Contacto a crear: {}", contact);
        contactRepository.save(contact);
        return new ResponseEntity<>(contact, HttpStatus.CREATED);
    }

    /**
     * Representa el método para borrar contactos.
     * @return la eliminación del contacto.
     */
    @DeleteMapping(path = "/contact/{id}")
    public ResponseEntity<Contact> delete(Contact contact) {
        log.info("Contacto a borrar: {}", contact);
        contactRepository.delete(contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    /**
     * Representa el método para obtener los contactos.
     * @return los contactos existentes.
     */
    @GetMapping("/contacts/{id}")
    public ResponseEntity<Contact> getContactById(@PathVariable long id){
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new Exception("Contacto no existe:" + id));
        return ResponseEntity.ok(contact);
    }

    /**
     * Representa el método para actualizar cada contacto.
     * @return el contacto actualizado.
     */
    @PutMapping("/contact")
    public Contact updateEmployee(@RequestBody Contact contact) {
        log.info("Contacto actualizado: {}", contact);
        return contactRepository.save(contact);
    }
}
