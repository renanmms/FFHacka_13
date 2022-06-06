import React from 'react';
import { User, UserCircle } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

import { 
  Container,
  Content,
  Header,
  IconWrapper,
  Input,
  Link,
  Title } from './styles';

export function AuthLogin() {
  return (
    <Container>
      <Header>
        <IconWrapper>
          <User size={25} weight="regular" />
        </IconWrapper>

        <Title>
          Organizador
        </Title>
      </Header>

      <Content>
        <UserCircle size={128} weight="thin" />

        <Input style={{ marginTop: 16 }} placeholder="CPF" />
        <Input placeholder="Password" />

        <TouchableOpacity>
          <Link>
            Fazer login como organizador
          </Link>
        </TouchableOpacity>
      </Content>
    </Container>
  )
}