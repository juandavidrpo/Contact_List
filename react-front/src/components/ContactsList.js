import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import contactService from '../service/contactService';

const ContactsList = () => {
    const [contacts, setContacts] = useState([]);

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

    useEffect(() => {
        init();
    }, []);

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
        <div className="container">
            <h3>Lista de contactos</h3>
            <div>
                <Link to="/add" className="btn btn-primary mb-2">
                    Agregar contacto
                </Link>
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>Correo</th>
                            <th>Fecha de cumpleaños</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>{contact.dateBirth}</td>
                            <td>
                                <Link
                                    className="btn btn-info"
                                    to={`/contact/edit/${contact.id}`}
                                >
                                    Actualizar
                                </Link>
                                <button
                                    className="btn btn-danger"
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
