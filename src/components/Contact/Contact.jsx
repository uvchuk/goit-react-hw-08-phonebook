import { useSelector, useDispatch } from 'react-redux';
import { removeContact, useContacts, useFilter } from 'redux/phoneBookSlice';

export const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(useContacts);
  const filter = useSelector(useFilter);

  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts(contacts, filter);

  return visibleContacts.map(({ id, name, number }) => (
    <li key={id}>
      <span>
        {name}: {number}
      </span>
      <button
        onClick={() => {
          dispatch(removeContact(id));
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
};
