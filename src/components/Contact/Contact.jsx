import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContactThunk } from 'redux/thunk';

export const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts(contacts, filter);

  return visibleContacts.map(({ id, name, phone }) => (
    <li key={id}>
      <span>
        {name}: {phone}
      </span>
      <button
        onClick={() => {
          dispatch(deleteContactThunk(id));
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
};
