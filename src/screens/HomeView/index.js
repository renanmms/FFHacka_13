import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput} from 'react-native';
import { FlatList, SectionList } from 'react-native-web';
import { Container, styles, TextTitle, SubTextTitle, UserInfo, EventInfo, EventItem, TimeContainer, DetailsContainer, StarsContainer, EventText, Filter, AddEvent} from './styles';
import { List, UsersFour, Star, Funnel, PlusCircle} from 'phosphor-react-native';


export function HomeView()
{
    return(
        <Container>
            <UserInfo>
                <TextTitle>Home</TextTitle>
                <List />
            </UserInfo>

            <EventInfo>
                <UsersFour />
                <SubTextTitle>Eventos</SubTextTitle>
            </EventInfo>

            <ScrollView>
                    <EventItem>
                        <TimeContainer>
                            <Text>17 Mar</Text>
                            <EventText>19:00</EventText>
                        </TimeContainer>

                        <DetailsContainer>
                            <EventText>Nome do Evento</EventText>
                        </DetailsContainer>

                        <StarsContainer>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                        </StarsContainer>
                    </EventItem>
                    <EventItem>
                        <TimeContainer>
                            <Text>17 Mar</Text>
                            <EventText>19:00</EventText>
                        </TimeContainer>

                        <DetailsContainer>
                            <EventText>Nome do Evento</EventText>
                        </DetailsContainer>

                        <StarsContainer>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                        </StarsContainer>
                    </EventItem>

                    <EventItem>
                        <TimeContainer>
                            <Text>17 Mar</Text>
                            <EventText>19:00</EventText>
                        </TimeContainer>

                        <DetailsContainer>
                            <EventText>Nome do Evento</EventText>
                        </DetailsContainer>

                        <StarsContainer>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                        </StarsContainer>
                    </EventItem>

                    <EventItem>
                        <TimeContainer>
                            <Text>17 Mar</Text>
                            <EventText>19:00</EventText>
                        </TimeContainer>

                        <DetailsContainer>
                            <EventText>Nome do Evento</EventText>
                        </DetailsContainer>

                        <StarsContainer>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                        </StarsContainer>
                    </EventItem>
                </ScrollView>


                <Filter>
                    <Funnel />
                    <TextInput></TextInput>
                </Filter>

                <AddEvent>
                    <PlusCircle />
                    <Button title='Adicionar evento'>
                        
                    </Button>             

                </AddEvent>
        </Container>
    );
}

