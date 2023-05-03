import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts?.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};
