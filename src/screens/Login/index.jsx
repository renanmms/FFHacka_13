import React from 'react';
import { UserCircle, DiscordLogo } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

import {
  Container,
  Content,
  IconWrapper,
  Link,
  Title } from "./styles";
  
import { light } from "../../styles/global";

export function Login() {
  return (
    <Container>
      <UserCircle size={128} weight="thin" />

      <Content>
        <IconWrapper>
          <DiscordLogo
            color={light.colors.red}
            size={32}
            weight="regular"
          />
        </IconWrapper>

        <Title>
          Entrar com Discord
        </Title>
      </Content>

      <TouchableOpacity>
        <Link>
          Fazer login como organizador
        </Link>
      </TouchableOpacity>
            
    </Container>
  )
}