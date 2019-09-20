import React from "react";
import { Box, Container } from "@material-ui/core";
import ToDo from "components/ToDo";

function App() {
  return (
    <Container>
      <Box my={20} display="flex" justifyContent="center" alignItems="center" flexDirection="row">
        <ToDo />
      </Box>
    </Container>
  );
}

export default App;
