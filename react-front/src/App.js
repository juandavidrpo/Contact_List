import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddContact from './components/AddContact';
import ContactsList from './components/ContactsList';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={<ContactsList />}></Route>
                    <Route path="/add" element={<AddContact />}></Route>
                    <Route
                        path="/contact/edit/:id"
                        element={<AddContact />}
                    ></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
