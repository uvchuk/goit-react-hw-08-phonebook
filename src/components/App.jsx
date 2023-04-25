import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContactsThunk } from 'redux/operations';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Contact } from './Contact/Contact';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm></ContactForm>
      </Section>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 && (
        <Section title={'Contacts'}>
          <Filter />
          <ContactList>
            <Contact />
          </ContactList>
        </Section>
      )}
    </>
  );
};

export default PhoneBook;
