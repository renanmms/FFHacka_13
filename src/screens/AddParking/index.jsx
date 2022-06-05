import { Signpost, PlusCircle } from 'phosphor-react-native';
import { AddButtonContainer, AddParkingField, Address, Container, ControlCircle, IconField, InfoParkingContainer, InputField, MainContainer, ParkingContainer, Parkinglist, TextAddParking, TitleField } from "./styles";
import MainHeader from "../../components/MainHeader";

const AddParking = () => {
    return (
        <Container>
            <MainContainer>
                <MainHeader title="Estacionamento" />
                <AddParkingField>
                    <TitleField>Insira um estacionamento</TitleField>
                    <InputField placeholder="Nome da rua, número - Bairro" />
                    <AddButtonContainer>
                        <PlusCircle size={32} />
                        <TextAddParking>Adicionar estacionamento</TextAddParking>
                    </AddButtonContainer>
                </AddParkingField>


                <Parkinglist>
                    <TitleField>Estacionamentos</TitleField>
                    <ParkingContainer>
                        <IconField>
                            <Signpost size={32} />
                        </IconField>
                        <InfoParkingContainer>
                            <Address>Rua Javascript, 255 - São Francisco</Address>
                            <ControlCircle></ControlCircle>
                        </InfoParkingContainer>
                    </ParkingContainer>

                    <ParkingContainer>
                        <IconField>
                            <Signpost size={32} />
                        </IconField>
                        <InfoParkingContainer>
                            <Address>Rua Javascript, 255 - São Francisco</Address>
                            <ControlCircle></ControlCircle>
                        </InfoParkingContainer>
                    </ParkingContainer>

                    <ParkingContainer>
                        <IconField>
                            <Signpost size={32} />
                        </IconField>
                        <InfoParkingContainer>
                            <Address>Rua Javascript, 255 - São Francisco</Address>
                            <ControlCircle></ControlCircle>
                        </InfoParkingContainer>
                    </ParkingContainer>
                </Parkinglist>
            </MainContainer>

        </Container>
    )
}

export default AddParking;