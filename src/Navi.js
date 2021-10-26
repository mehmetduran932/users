import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
function Navi() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Users Add</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
export default Navi;
