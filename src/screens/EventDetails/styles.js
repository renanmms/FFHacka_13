import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    
    display: flex;
`;

export const MainContainer = styled.View`
    margin: 0 24px  24px  24px;
`;

export const Header = styled.View`
    /* background-color: gray; */
    width: 100%;

    display: flex;
    justify-content: center;
    margin-bottom: 28px;
`;

export const Title = styled.Text`
    color: black;
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 8px;
`;

export const Txt = styled.Text`
    color: black;
    font-size: 18px;
    font-weight: 400;
    /* margin-bottom: 8px; */
`;

export const TimeContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Date = styled.Text`
    color: black;
    font-size: 16px;
    font-weight: 500;
`;

export const Divider = styled.Text`
    font-size: 16px;
    padding: 0 8px 0 8px;
`;

export const Hour = styled.Text`
    color: black;
    font-size: 16px;
    font-weight: 500;
`;


export const LocationContainer = styled.View`
/* background-color: green; */
    width: 100%;

    display: flex;
    justify-content: center;
    margin-bottom: 32px;
`;

export const TitleField = styled.Text`
    color: black;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
`;

export const LocationField = styled.View`
    width: 100%;
    height: 48px;
    background-color: rgba(64, 64, 64, 0.3);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Location = styled.Text`
    color: black;
    font-size: 12px;
    font-weight: 600;
`;

export const DescriptionField = styled.View`
    width: 100%;
    height: 120px;
    background-color: rgba(64, 64, 64, 0.3);
    border-radius: 5px;
    margin-bottom: 24px;

`;

export const DescriptionTitle = styled.Text`
    width: 100%;
    color: black;
    font-size: 16px;
    font-weight: 600;
    padding: 8px;
`;

export const DescriptionContainer = styled.View`
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DescriptionText = styled.Text`
    
    color: black;
    font-size: 16px;
    font-weight: 400;
`;


export const StarContainer = styled.View`
    width: 100%;
    height: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
`;

export const InteractiveIcon = styled.TouchableOpacity``;

export const OrganizerContainer = styled.View`
    width: 100%;
    
    display: flex;
    align-items: center;
`;

export const Organizer = styled.TouchableOpacity``;