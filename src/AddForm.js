import React from "react";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
function AddForm() {
  return (
    <>
      <div>
        <FormControl id="first-name" isRequired>
          <FormLabel>First name</FormLabel>
          <Input placeholder="First name" />
        </FormControl>
      </div>
      <div>
        <FormControl id="last-name" isRequired>
          <FormLabel>Last name</FormLabel>
          <Input placeholder="Last name" />
        </FormControl>
      </div>
      <div>
        <FormControl id="email" isRequired>
          <FormLabel>E-Mail</FormLabel>
          <Input placeholder="E-Mail" />
        </FormControl>
      </div>
      <div>
        <FormControl id="src" isRequired>
          <FormLabel>İmage Url</FormLabel>
          <Input placeholder="Url" />
        </FormControl>
      </div>
      <Button colorScheme="blue">Add To Api</Button>
    </>
  );
}
export default AddForm;
