import { StyleSheet } from "react-native";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    margin: auto;

`;

export const TextTitle = styled.Text`
    font-size: 32px;
    padding: 10px;
`;

export const SubTextTitle = styled.Text`
    font-size: 28px;

`;

export const EventText = styled.Text`
    font-size: 18px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    margin: 10px;
    align-items: center;
`;

export const EventItem = styled.TouchableOpacity`
    flex-direction: row;
    padding: 10px;
    margin: 10px;
    background-color: rgba(64, 64, 64, 0.3);
    border-radius: 5px;
    align-items: center;
`;

export const TimeContainer = styled.View`
    flex-direction: column;

`;

export const DetailsContainer = styled.View`
    padding: 10px;
`;

export const StarsContainer = styled.View`
    flex-direction: row;

`;

export const EventInfo = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const Filter = styled.View`
    margin: 10px;
    border: 2px gray;
    border-radius: 5px;
    align-items: left;
`;

export const AddEvent = styled.View`
    flex-direction: row;
    justify-content: center;
`;

