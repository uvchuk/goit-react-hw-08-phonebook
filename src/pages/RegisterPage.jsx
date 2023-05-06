import React from 'react';
import { Link } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy/styles';
import {
  Typography,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Button,
} from '@mui/joy';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(signUpThunk({ name, email, password }));
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
        <div>
          <Typography level="h4" component="h1">
            Welcome!
          </Typography>
          <Typography level="body2">Sign up to continue.</Typography>
        </div>
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
          <FormControl defaultValue="" required>
            <FormLabel>Name</FormLabel>
            <Input
              // html input attribute
              name="name"
              type="text"
              placeholder="John Doe"
            />
          </FormControl>
          <FormControl defaultValue="" required>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
            />
          </FormControl>
          <FormControl defaultValue="" required>
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" placeholder="password" />
          </FormControl>
          <Button type="submit" sx={{ mt: 1 /* margin top */ }}>
            Sign Up
          </Button>
        </form>
        <Typography
          endDecorator={<Link to="/login">Log in</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Have an account?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
};

export default RegisterPage;
