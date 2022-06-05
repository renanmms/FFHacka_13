import React from 'react';
import { CheckSquare } from "phosphor-react-native";

import { Container, Title } from "./styles";

export function SucessForm() {
  return (
    <Container>
      <CheckSquare size={50} weight="thin" />

      <Title>
        Formulário enviado com sucesso
      </Title>
    </Container>
  )
}