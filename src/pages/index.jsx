import * as React from "react";
import Container from "@mui/material/Container";

const Page = (props) => {
  return (
    <Container maxWidth={false}>
      {props.children}
    </Container>
  );
};

export default Page;
