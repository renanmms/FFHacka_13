import { TextInput } from "react-native";
import { Input as NameInput } from "../../components/Input";
import { 
  Container,
  NameEventInput,
  InputLines,
  InputArea,
  HoursInput,
  DateInput,
  DescriptionInput,
  NewDescription,
  CustomButton,
  CustomButtonText,
  TextLabel,
  NewHours,
  NewDate,
  FromInput,
  ToInput
} from "./styles"


export default function AddEvent(){
  return(
    <Container>
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
          <DescriptionInput numberOfLines={10} multiline={true}/>
        </NewDescription>
      </InputArea>
      <CustomButton>
        <CustomButtonText>Salvar</CustomButtonText>
      </CustomButton>
    </Container>
  )
}

