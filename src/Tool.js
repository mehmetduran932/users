import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

function Tool({ key, avatar, email, first_name, last_name }) {
  return (
    <>
      <ListGroup key={key}>
        <ListGroupItem key={key}>
          <Wrap>
            <WrapItem>
              <Avatar name={avatar} src={avatar} />
            </WrapItem>
            <div>{email}</div>
            <div>{first_name}</div>
            <div>{last_name}</div>
          </Wrap>
        </ListGroupItem>
      </ListGroup>
      <Divider />
    </>
  );
}
export default Tool;
