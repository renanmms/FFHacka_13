import { Container, InteractiveIcon, Title } from "./styles";
import { List } from 'phosphor-react-native';

const MainHeader = (props) => {
    return (
        <Container>
            <Title>{props.title}</Title>
            <InteractiveIcon>
                <List color="#E60000" weight="bold" size={32} />
            </InteractiveIcon>
        </Container>
    )
}

export default MainHeader;