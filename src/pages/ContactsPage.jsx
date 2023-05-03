import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContactsThunk } from 'redux/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Contact } from 'components/Contact/Contact';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContactsThunk());
  // }, [dispatch]);

  return (
    <>
      <ContactForm></ContactForm>
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

export default ContactsPage;
