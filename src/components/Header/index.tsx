
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface iHeaderProps {
    openNewTransactionModal: () => void
}
export function Header(props:iHeaderProps) {

    return (
        <Container>
            <Content>
                <img src = {logoImg} alt = "dt money"></img>
                <button type = "button" onClick = {props.openNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    );
}