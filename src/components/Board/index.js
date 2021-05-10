import React from "react";
import List from "../List";

import { Container } from "./styles";

export default function Board() {
  return (
    <Container>
      <List title="Tarefas" />
      <List title="Tarefas" />
      <List title="Tarefas" />
      <List title="Tarefas" />
    </Container>
  );
}
