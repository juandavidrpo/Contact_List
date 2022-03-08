import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import contactService from '../service/contactService';

const AddContact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

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
                    console.log('hubo un error', error);
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
                    console.log('hay un error', error);
                });
        }
    };

    useEffect(() => {
        if (id) {
            contactService
                .getAll(id)
                .then((contact) => {
                    setName(contact.data.name);
                    setPhone(contact.data.phone);
                    setEmail(contact.data.email);
                    setDateBirth(contact.data.dateBirth);
                })
                .catch((error) => {
                    console.log('hubo un error', error);
                });
        }
    }, []);

    return (
        <div>
            <h3>Agregado nuevo contacto</h3>
            <form>
                <div>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre"
                    />

                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Número de telefono"
                    />

                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />

                    <input
                        type="date"
                        id="dateBirth"
                        value={dateBirth}
                        onChange={(e) => setDateBirth(e.target.value)}
                        placeholder="Cumpleaños"
                    />
                </div>
                <div>
                    <button onClick={(e) => saveContact(e)}>Guardar</button>
                </div>
            </form>
            <Link to="/">Atras</Link>
        </div>
    );
};

export default AddContact;
