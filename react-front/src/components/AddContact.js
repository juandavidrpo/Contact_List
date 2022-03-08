import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import contactService from '../service/contactService';

/**
 * Representa la función para agregar datos de contacto.
 * @version 1.0.0 2002-03-08
 * @author Juan David Rojas Restrepo
 * @since 1.0.0
 */
const AddContact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    /**
     * Representa la función para guardar los contactos.
     */
    const saveContact = (e) => {
        e.preventDefault();

        const contact = { name, phone, email, dateBirth, id };
        if (id) {
            contactService
                .update(contact)
                .then((response) => {
                    console.log('Contacto actualizado', response.data);
                    navigate('/');
                })
                .catch((error) => {
                    console.log('Hubo un problema al actualizar', error);
                });
        } else {
            contactService
                .create(contact)
                .then((response) => {
                    console.log(
                        'Contacto agregado satisfactoriamente',
                        response.data
                    );
                    navigate('/');
                })
                .catch((error) => {
                    console.log('Hubo un problema al agregar', error);
                });
        }
    };

    useEffect(() => {
        if (id) {
            contactService
                .get(id)
                .then((contact) => {
                    setName(contact.data.name);
                    setPhone(contact.data.phone);
                    setEmail(contact.data.email);
                    setDateBirth(contact.data.dateBirth);
                })
                .catch((error) => {
                    console.log('Hubo un error', error);
                });
        }
    }, []);

    return (
        <div className="container">
            <h3>Agregado nuevo contacto</h3>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Número de telefono"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="date"
                        className="form-control col-4"
                        id="dateBirth"
                        value={dateBirth}
                        onChange={(e) => setDateBirth(e.target.value)}
                        placeholder="Cumpleaños"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => saveContact(e)}
                    >
                        Guardar
                    </button>
                </div>
            </form>
            <Link to="/">Atras</Link>
        </div>
    );
};

export default AddContact;
