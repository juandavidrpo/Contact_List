import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddContact from './components/AddContact';
import ContactsList from './components/ContactsList';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Representa las rutas.
 * @version 1.0.0 2002-03-08
 * @author Juan David Rojas Restrepo
 * @since 1.0.0
 */
function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={<ContactsList />}></Route>
                    <Route path="/add" element={<AddContact />}></Route>
                    <Route path="/contact/edit/:id" element={<AddContact />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
