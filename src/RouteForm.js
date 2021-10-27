import React from "react";
import Users from "./Users";
import AddForm from "./AddForm";
import { Link } from "react-router-dom";

import { Button, ButtonGroup } from "@chakra-ui/react";
function RouteForm() {
  return (
    <>
      <h1>Linkler</h1>
      <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme="blue">
          <Link to={"/Users"}>Listele</Link>
        </Button>
        <Button>
          <Link to={"/AddForm"}>Kaydet</Link>
        </Button>
      </ButtonGroup>
    </>
  );
}
export default RouteForm;
