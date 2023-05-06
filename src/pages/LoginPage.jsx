import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/operations';
import { CssVarsProvider } from '@mui/joy/styles';
import {
  Typography,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Button,
} from '@mui/joy';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(loginThunk({ email, password }));
    form.reset();
  };
  return (
    <CssVarsProvider>
      <Sheet
        variant="outlined"
        sx={{
          width: 300,
          ml: 4, // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
      >
        <Typography level="h4" component="h1">
          Welcome!
        </Typography>
        <Typography level="body2">Sign in to continue.</Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <FormControl required>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" placeholder="johndoe@email.com" />
          </FormControl>
          <FormControl required>
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" placeholder="password" />
          </FormControl>
          <Button type="submit" sx={{ mt: 1 /* margin top */ }}>
            Log in
          </Button>
        </form>
        <Typography
          endDecorator={<Link to="/registration">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Don't have an account?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
};

export default LoginPage;
