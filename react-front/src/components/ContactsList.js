import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import contactService from '../service/contactService';

const ContactsList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        contactService
            .getAll()
            .then((response) => {
                console.log('imprimiendo data', response.data);
                setContacts(response.data);
            })
            .catch((error) => {
                console.log('error:', error);
            });
    };

    const handleDelete = (id) => {
        contactService
            .remove(id)
            .then((response) => {
                console.log('contacto borrado', response.data);
                init();
            })
            .catch((error) => {
                console.log('hubo un error', error);
            });
    };

    return (
        <div>
            <h3>Lista de contactos</h3>
            <div>
                <Link to="/add">Agregar contacto</Link>
                <table border="1" cellPadding="10">
                    <tr>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th>Fecha de cumpelaños</th>
                        <th>Acciones</th>
                    </tr>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>{contact.dateBirth}</td>
                            <td>
                                <Link to={`/contact/edit/${contact.id}`}>
                                    Actualizar
                                </Link>
                                <button
                                    onClick={(e) => {
                                        handleDelete(contact.id);
                                    }}
                                >
                                    Borrar
                                </button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default ContactsList;
