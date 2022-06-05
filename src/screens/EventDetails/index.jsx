import React from 'react';
import { Container, Date, DescriptionContainer, Divider, Header, Hour, Location, LocationContainer, LocationField, MainContainer, TimeContainer, Title, TitleField, DescriptionField, DescriptionTitle, DescriptionText, StarContainer, InteractiveIcon, Organizer, Txt, OrganizerContainer } from './styles';
import MainHeader from '../../components/MainHeader';
import { Star } from 'phosphor-react-native';


const EventDatails = () => {
    return (
        <Container>
            <MainContainer>
                <MainHeader title={"Evento"} />

                <Header>
                    <Title>Nome do Evento</Title>
                    <TimeContainer>
                        <Date>17 de março</Date>
                        <Divider>-</Divider>
                        <Hour>19:00</Hour>
                    </TimeContainer>
                </Header>

                <LocationContainer>
                    <TitleField>Origem</TitleField>
                    <LocationField>
                        <Location>Rua javascript, 255 - São Francisco</Location>
                    </LocationField>
                </LocationContainer>

                <LocationContainer>
                    <TitleField>Destino</TitleField>
                    <LocationField>
                        <Location>Rua javascript, 255 - São Francisco</Location>
                    </LocationField>
                </LocationContainer>

                <DescriptionField>
                    <DescriptionTitle>Descrição</DescriptionTitle>
                    <DescriptionContainer>
                        <DescriptionText>Pedalo em grupo para iniciantes</DescriptionText>
                    </DescriptionContainer>
                </DescriptionField>
                <StarContainer>
                    <InteractiveIcon style={{ marginRight: 8 }}>
                        <Star size={32} />
                    </InteractiveIcon>
                    <InteractiveIcon style={{ marginRight: 8 }}>
                        <Star size={32} />
                    </InteractiveIcon>
                    <InteractiveIcon style={{ marginRight: 8 }}>
                        <Star size={32} />
                    </InteractiveIcon>
                    <InteractiveIcon style={{ marginRight: 8 }}>
                        <Star size={32} />
                    </InteractiveIcon>
                    <InteractiveIcon style={{ marginRight: 8 }}>
                        <Star size={32} />
                    </InteractiveIcon>
                </StarContainer>
                <OrganizerContainer>
                    <Organizer>
                        <Txt>Organizador</Txt>
                    </Organizer>
                </OrganizerContainer>
            </MainContainer>
        </Container>
    )

}

export default EventDatails