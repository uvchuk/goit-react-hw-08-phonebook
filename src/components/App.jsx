import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useContacts } from 'redux/selectors';
import { fetchContactsThunk } from 'redux/thunk';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Contact } from './Contact/Contact';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(useContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm></ContactForm>
      </Section>
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
