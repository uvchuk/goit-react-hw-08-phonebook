import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Contact } from 'components/Contact/Contact';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  return (
    <>
      <ContactForm></ContactForm>
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
