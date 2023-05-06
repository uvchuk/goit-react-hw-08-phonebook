import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { deleteContactThunk } from 'redux/operations';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  return (
    <li>
      <span>
        {name}: <span>{number}</span>
      </span>
      <button
        type="button"
        disabled={isLoading}
        onClick={() => {
          dispatch(deleteContactThunk(id));
        }}
      >
        {isLoading ? <span>Loading...</span> : <span>Delete</span>}
      </button>
    </li>
  );
};
