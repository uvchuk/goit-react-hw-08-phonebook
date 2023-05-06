import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { addContactThunk } from 'redux/operations';
import { Typography } from '@mui/material';
import { Button } from '@mui/joy';
import SendIcon from '@mui/icons-material/Send';
import { ValidationTextField } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (checkIfExist(name))
      return alert('This contact is exist in your phonebook!');
    dispatch(addContactThunk({ name, number }));
    form.reset();
  };

  const checkIfExist = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  return (
    <>
      <Typography variant="h4" component="h2" sx={{ mt: 2 }}>
        Save new contact to your's PhoneBook!
      </Typography>
      <form
        onSubmit={onSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <ValidationTextField
          id="name"
          label="Name"
          variant="outlined"
          helperText="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer"
          inputProps={{
            inputMode: 'text',
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          sx={{ mt: 2, maxWidth: '500px' }}
          required
        ></ValidationTextField>
        <ValidationTextField
          id="number"
          label="Number"
          variant="outlined"
          helperText="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          inputProps={{
            inputMode: 'numeric',
            pattern: '[+]?[0-9]*',
          }}
          sx={{ mt: 2, maxWidth: '500px' }}
          required
        ></ValidationTextField>
        <Button
          sx={{ width: 200, mt: 2 }}
          loading={isLoading}
          loadingPosition="end"
          endDecorator={isLoading && <SendIcon />}
          variant="solid"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? 'Send' : 'Add to contacts'}
        </Button>
      </form>
    </>
  );
};
