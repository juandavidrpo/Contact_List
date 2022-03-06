package com.sofka.service;

import com.sofka.domain.Contact;

import java.util.List;
import java.util.Optional;

public interface IContactService {

    public List<Contact> list();

    public Contact save(Contact contact);

    public Contact update(Long id, Contact contact);

    public void delete(Contact contact);

    public Optional<Contact> findUser(Contact contact);
}
