import { TextInput } from "react-native";
import { TextArea } from "../../components/TextArea";
import { Input as NameInput } from "../../components/Input";
import MainHeader from "../../components/MainHeader";
import { 
  Container,
  NameEventInput,
  InputLines,
  InputArea,
  HoursInput,
  DateInput,
  NewDescription,
  CustomButton,
  CustomButtonText,
  TextLabel,
  NewHours,
  NewDate,
  FromInput,
  ToInput,
  DescriptionInput
} from "./styles"


export default function AddEvent(){
  return(
    <Container>
      <MainHeader title={"Novo evento"}/>
      <InputArea>
        <NameEventInput>
          <TextLabel>Nome do evento</TextLabel>
          <NameInput/>
        </NameEventInput>
        <InputLines>

          <HoursInput>
            <TextLabel>Horário</TextLabel>
            <NewHours  placeholder="00:00"/>
          </HoursInput>

          <DateInput>
            <TextLabel>Data</TextLabel>
            <NewDate placeholder="xx/xx/xx"/>
          </DateInput>

        </InputLines>
        <FromInput placeholder="De onde?"/>
        <ToInput placeholder="Para onde?"/>
        <NewDescription>
          <TextLabel>Descrição</TextLabel>
          <TextArea />
        </NewDescription>
      </InputArea>
      <CustomButton>
        <CustomButtonText>Salvar</CustomButtonText>
      </CustomButton>
    </Container>
  )
}

