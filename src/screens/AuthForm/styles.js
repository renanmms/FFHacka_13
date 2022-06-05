import styled from 'styled-components/native';
import { light } from '../../styles/global';

export const Container = styled.View`
  flex: 1;
  padding: 70px 50px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`

export const IconWrapper = styled.View`
margin-right: 5px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`

export const Form = styled.View`
  margin-top: 64px;
`

export const InputWrapper = styled.View`
  margin-bottom: 16px;
`

export const InputTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
`

export const Input = styled.TextInput`
  width: 294px;
  height: 45px;
  background-color: ${light.colors.gray};
  padding: 14px 12px;
  border-radius: 5px;
  font-size: 14px;
`

export const Terms = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const TermsTitle = styled.Text`
  font-size: 13px;
  margin-left: 10px;
`

export const FormButton = styled.TouchableOpacity`
  width: 253px;
  height: 44px;
  margin: 53px auto 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  background-color: ${light.colors.gray};
`