import styled from 'styled-components/native';
import { light } from '../../styles/global';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Content = styled.TouchableOpacity`
  width: 253px;
  height: 44px;
  padding: 0 16px;
  margin-top: 17px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  background-color: ${light.colors.gray};
  border-radius: 5px;
`

export const IconWrapper = styled.View`
  margin-right: 22px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`

export const Link = styled.Text`
  font-size: 15px;
  color: ${light.colors.blue};
  text-decoration: underline;
`