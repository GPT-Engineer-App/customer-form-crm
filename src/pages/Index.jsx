import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Table, Thead, Tbody, Tr, Th, Td, VStack, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = { name, email };
    setCustomers([...customers, newCustomer]);
    setName("");
    setEmail("");
  };

  const handleDelete = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        Simple CRM Tool
      </Heading>

      <VStack spacing={8} alignItems="stretch">
        <Box>
          <Heading as="h2" size="lg" marginBottom={4}>
            Add New Customer
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="name" marginBottom={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </FormControl>
            <FormControl id="email" marginBottom={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Add Customer
            </Button>
          </form>
        </Box>

        <Box>
          <Heading as="h2" size="lg" marginBottom={4}>
            Customer List
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {customers.map((customer, index) => (
                <Tr key={index}>
                  <Td>{customer.name}</Td>
                  <Td>{customer.email}</Td>
                  <Td>
                    <IconButton icon={<FaTrash />} aria-label="Delete" onClick={() => handleDelete(index)} size="sm" variant="ghost" colorScheme="red" />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
