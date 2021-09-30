import * as React from "react";
import Container from "@mui/material/Container";
import StackPlayground from "../components/stack_playground";

const Page = (props) => {
  return (
    <Container maxWidth={false}>
      <StackPlayground />
      {props.children}
    </Container>
  );
};

export default Page;
