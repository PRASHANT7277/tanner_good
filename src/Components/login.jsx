import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import { Context } from "../context/context";
export default function Login() {
  const navigate = useNavigate();

  const { handleLogin } = useContext(Context);
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  function onSubmit() {
    handleLogin(form);
    console.log(form);
    //navigate('/')
  }
  return (
    <>
      <Box w="450px" m="auto" mb="150px" mt="50" textAlign="center">
        <Text fontSize="40">Login</Text>

        <FormControl>
          <Input
            mt="5"
            type="email"
            required
            placeholder="Email Address"
            name="email"
            autoComplete="off"
            value={form.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Input
            mt="5"
            type="password"
            required
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </FormControl>
        <Text mt="5" textAlign="left">
          <a href="/">Forgot ypur Password?</a>
        </Text>
        <Button
          mt="10"
          pl="70"
          pr="70"
          pt="6"
          pb="6"
          fontSize="large"
          backgroundColor="#475D4B"
          colorScheme="white"
          onClick={onSubmit}
        >
          Sign in
        </Button>
        <Text mt="5">
          <Link to="/signup">Create account</Link>
        </Text>
      </Box>
    </>
  );
}
