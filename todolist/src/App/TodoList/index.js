import React from "react";
// import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

import Background from "./Background";
import Title from "./Title";
import ToDos from "./ToDos";
import NewTodo from "./NewTodo";
import DownloadButton from "./DownloadButton";
import UploadButton from "./UploadButton";
// import { Typography } from "@material-ui/core";

function TodoList() {
  return (
    <Box height="100vh" display="flex" justifyContent="center">
      <Box height="100%" width="100%" maxWidth="600px">
        <Background elevation={10}>
          <Box
            display="flex"
            style={{ wordWrap: "break-word" }}
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Box minWidth={0}>
              <Title />
            </Box>
            <Box>
              <UploadButton />
              <DownloadButton />
            </Box>
          </Box>
          <Divider />
          <ToDos />
          <NewTodo />
        </Background>
      </Box>
    </Box>
  );
}

export default TodoList;
