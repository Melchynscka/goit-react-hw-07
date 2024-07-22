import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/contactsSlice';

export default function App() {
    const dispath = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
    dispath(fetchContacts());
    }, [dispath]);
    
    return (
    <div className={css.container}>
        <h1>Phonebook</h1>
            <ContactForm />
            {loading && !error && <b>Request in progress...</b>}
        <SearchBox />
        <ContactList />
    </div>
    );
}