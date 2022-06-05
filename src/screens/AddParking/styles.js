import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
`;

export const MainContainer = styled.View`
    margin: 24px;
`;


export const AddParkingField = styled.View`
    width: 100%;

    display: flex;
    margin-bottom: 70px;
    margin-top: 24px;
`;

export const TitleField = styled.Text`
    color: black;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 12px;
`;

export const InputField = styled.TextInput`
    width: 100%;
    height: 48px;
    background-color: rgba(64, 64, 64, 0.3);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 16px;
    margin-bottom: 8px;
`;

export const AddButtonContainer = styled.TouchableOpacity`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    
`;

export const TextAddParking = styled.Text`
    color: black;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    margin-left: 8px;
`;

export const Parkinglist = styled.View`
    width: 100%;
    display: flex;
`;

export const ParkingContainer = styled.TouchableOpacity`
    width: 100%;
    background-color: rgba(64, 64, 64, 0.3);
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`;

export const IconField = styled.View`
    padding: 16px 18px 16px 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InfoParkingContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;

export const Address = styled.Text`
    color: black;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
`;

export const ControlCircle = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
`;