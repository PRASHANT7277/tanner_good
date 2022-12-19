import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/context";

import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";

export default function Signup() {
  const navigate = useNavigate();
  const { handleSignUp } = useContext(Context);
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  function onSubmit() {
    handleSignUp(form);
    console.log(form);
    navigate("/login");
  }
  return (
    <>
      <Box w="450px" m="auto" mb="150px" mt="50" textAlign="center">
        <Text fontSize="40">Create account</Text>
        <FormControl isRequired>
          <Input mt="5" placeholder="First name" />
        </FormControl>
        <FormControl isRequired>
          <Input mt="5" placeholder="Last name" />
        </FormControl>
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
            autoComplete="off"
            value={form.password}
            onChange={handleChange}
          />
        </FormControl>
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
          Create
        </Button>
      </Box>
    </>
  );
}
