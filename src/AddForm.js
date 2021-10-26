import React, { useState } from "react";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
function AddForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  function saveOn() {
    axios
      .post("https://reqres.in/api/users?delay=1", {
        email: email,
        first_name: firstName,
        last_name: lastName,
        avatar: avatar
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <div>
        <FormControl id="first-name" isRequired>
          <FormLabel>First name</FormLabel>
          <Input
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
      </div>
      <div>
        <FormControl id="last-name" isRequired>
          <FormLabel>Last name</FormLabel>
          <Input
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
      </div>
      <div>
        <FormControl id="email" isRequired>
          <FormLabel>E-Mail</FormLabel>
          <Input
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
      </div>
      <div>
        <FormControl id="src" isRequired>
          <FormLabel>Image Url</FormLabel>
          <Input
            placeholder="Url"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </FormControl>
      </div>
      <Button colorScheme="blue" onClick={() => saveOn()}>
        Add To Api
      </Button>
    </>
  );
}
export default AddForm;
