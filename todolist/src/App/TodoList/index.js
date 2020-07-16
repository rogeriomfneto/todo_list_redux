import React from "react";
// import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import Background from "./Background";

function TodoList() {
  return (
    <Box height="100vh" display="flex" justifyContent="center">
      <Box height="100%" width="100%" maxWidth="600px">
        <Background elevation={10}>Todo List</Background>
      </Box>
    </Box>
  );
}

export default TodoList;
