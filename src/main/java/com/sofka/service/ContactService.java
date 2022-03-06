package com.sofka.service;

import com.sofka.dao.ContactDao;
import com.sofka.domain.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService implements IContactService{

    @Autowired //inyectar usuariodao
    private ContactDao contactDao;

    @Override
    @Transactional(readOnly = true)
    public List<Contact> list() {
        return (List<Contact>) contactDao.findAll();
    }

    @Override
    @Transactional
    public Contact save(Contact contact) {
        return contactDao.save(contact);
    }

    @Override
    @Transactional
    public Contact update(Long id, Contact contact) {
        contact.setId(id);
        return contactDao.save(contact);
    }

    @Transactional
    public void updateName(Long id, Contact contact) {
        contactDao.updateName(id, contact.getName());
    }

    @Transactional
    public void updatePhone(Long id, Contact contact) {
        contactDao.updatePhone(id, contact.getPhone());
    }

    @Transactional
    public void updateEmail(Long id, Contact contact) {
        contactDao.updateEmail(id, contact.getEmail());
    }

    @Transactional
    public void updateDateBirth(Long id, Contact contact) {
        contactDao.updateDateBirth(id, contact.getDateBirth());
    }

    @Override
    @Transactional
    public void delete(Contact contact) {
        contactDao.delete(contact);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Contact> findUser(Contact contact) {
        return contactDao.findById(contact.getId());
    }
}
