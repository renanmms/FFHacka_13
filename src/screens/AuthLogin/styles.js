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

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`

export const Logo = styled.Image`
  width: 128px;
  height: 128px;
  margin-bottom: 16px;
`

export const Input = styled.TextInput`
  width: 261px;
  height: 46px;
  background-color: ${light.colors.gray};
  margin-bottom: 7px;
  padding: 14px 12px;
  border-radius: 5px;
  font-size: 14px;
`

export const Link = styled.Text`
  margin-top: 23px;
  font-size: 15px;
  color: ${light.colors.blue};
  text-decoration: underline;
`