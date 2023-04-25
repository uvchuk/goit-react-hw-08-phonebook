import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContactThunk } from 'redux/operations';

export const Contact = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return filteredContacts.map(({ id, name, phone }) => (
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
