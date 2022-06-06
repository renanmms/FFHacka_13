import styled from "styled-components/native";
import { TextInput, Text } from "react-native";

export const Container = styled.SafeAreaView`
  
  background: #fff;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputArea = styled.View`
  width: 80%;
  margin-bottom: 34px;
  justify-content: center;
  align-items: center;
`;

export const NameEventInput = styled.View`
  height: 67px;
  width: 100%;
  margin: 10px auto;
`;

export const TextLabel = styled(Text)`
  color: #000;
`;

export const NameInput = styled(TextInput)`
  height: 45px;
  border-radius: 5px;
  border: 1px solid #333;
  padding-left: 10px;
`;

export const InputLines = styled.View`
  flex-direction: row;
  padding: 0;
  height: 69px;
  width: 100%;
`;

export const HoursInput = styled.View`
  height: 100%;
  width: 40%;
  margin-right: 19px;
`;

export const DateInput = styled.View`
  height: 100%;
  width: 53%;
`;

export const NewHours = styled(TextInput)`
  border: 1px solid #333;
  padding-left: 10px;
  height: 45px;
  border-radius: 5px;
`;

export const NewDate = styled(TextInput)`
  border: 1px solid #333;
  padding-left: 10px;
  height: 45px;
  border-radius: 5px;
`;

export const FromInput = styled(TextInput)`
  border: 1px solid #333;
  width: 100%;
  height: 45px;
  margin: 5px 0;
  padding-left: 10px;
  border-radius: 5px;
`;
export const ToInput = styled(TextInput)`
  border: 1px solid #333;
  width: 100%;
  height: 45px;
  margin: 5px 0;
  padding-left: 10px;
  border-radius: 5px;
`;

export const NewDescription = styled.View`
  height: 116px;
  width: 100%;
  `;

export const DescriptionInput = styled(TextInput)`
  border: 1px solid #333;
  height: 97px;
  
`;

export const CustomButton = styled.TouchableOpacity`
  height: 44px;
  width: 253px;
  background: #d9d9d9;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
export const CustomButtonText = styled.Text``;
