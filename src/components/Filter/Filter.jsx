import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/phoneBookSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        name="filter"
        type="text"
        onChange={evt => dispatch(filterContact(evt.target.value))}
      />
    </label>
  );
};
