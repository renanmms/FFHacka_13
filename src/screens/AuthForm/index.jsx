import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { User } from 'phosphor-react-native';
import { View, Text, TouchableOpacity } from 'react-native';

import { 
  Container,
  Form,
  Header,
  IconWrapper,
  Title,
  Input,
  InputWrapper,
  InputTitle, 
  Terms,
  TermsTitle,
  FormButton} from './styles';

export function AuthForm() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <Header>
        <IconWrapper>
          <User size={25} weight="regular" />
        </IconWrapper>

        <Title>
          Formulário do Organizador
        </Title>
      </Header>

      <Form>
        <InputWrapper>
          <InputTitle>
            Nome completo*
          </InputTitle>
          <Input />
        </InputWrapper>

        <InputWrapper>
          <InputTitle>
            CPF*
          </InputTitle>
          <Input placeholder="XXX.XXX.XXX-XX" />
        </InputWrapper>

        <InputWrapper>
          <InputTitle>
            Email*
          </InputTitle>
          <Input />
        </InputWrapper>

        <InputWrapper>
          <InputTitle>
            Contato
          </InputTitle>
          <Input />
        </InputWrapper>

        <Terms>
          <Checkbox value={isChecked} onValueChange={setIsChecked} />

          <TermsTitle>
            Aceito os termos e políticas de segurança
          </TermsTitle>
        </Terms>

        <FormButton>
          <Text>
            Enviar
          </Text>
        </FormButton>
      </Form>
    </Container>
  )
}