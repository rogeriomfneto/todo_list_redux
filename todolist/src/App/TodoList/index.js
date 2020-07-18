import React from "react";
// import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

import Background from "./Background";
import Title from "./Title";
import ToDos from "./ToDos";
import NewTodo from "./NewTodo";
// import { Typography } from "@material-ui/core";

function TodoList() {
  return (
    <Box height="100vh" display="flex" justifyContent="center">
      <Box height="100%" width="100%" maxWidth="600px">
        <Background elevation={10}>
          <Title />
          <Divider />
          <ToDos />
          <NewTodo />
        </Background>
      </Box>
    </Box>
  );
}

export default TodoList;
