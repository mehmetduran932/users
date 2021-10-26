import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
function Tool({ key, avatar, email, first_name, last_name }) {
  return (
    <>
      <ListGroup key={key}>
        <ListGroupItem key={key}>
          <Wrap>
            <WrapItem>
              <Avatar name={avatar} src={avatar} />
            </WrapItem>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>E-Mail</Th>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{email}</Td>
                  <Td>{first_name}</Td>
                  <Td>{last_name}</Td>
                </Tr>
              </Tbody>
            </Table>
          </Wrap>
        </ListGroupItem>
      </ListGroup>
      <Divider />
    </>
  );
}
export default Tool;
