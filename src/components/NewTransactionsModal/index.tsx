import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import IncomeSvg from '../../assets/income.svg';
import OutcomeSvg from '../../assets/outcome.svg';

import {Container, TransactionContainer, RadioBox} from './styles'
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () =>void;
}

export function NewTransactionsModal({isOpen, onRequestClose} : NewTransactionModalProps){

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [type,setType] = useState('deposit');
    const [category, setCategory] = useState('')

    const {createTransaction} = useTransactions();
    async function handleCreateNewTransaction(event:FormEvent) {
        event.preventDefault();

        await createTransaction({title, amount,type, category});

        onRequestClose();
        setTitle('');
        setAmount(0);
        setType('deposit');
        setCategory('');
        
    }
    return(

        <Modal 
          isOpen = {isOpen}
          onRequestClose = {onRequestClose}
          overlayClassName = "react-modal-overlay"
          className = "react-modal-content"
        >

            <button 
                type = "button"
                onClick = {onRequestClose}
                className="react-modal-close"
            > 
                <img src = {closeImg} alt = "Fechar Modal"></img>
            </button>
            <Container onSubmit = {handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                
                <input 
                    placeholder = "Título"
                    value = {title} 
                    onChange = {event => setTitle(event.target.value)}
                />
                
                <input
                    type = "number"
                    placeholder = "Valor"
                    value = {amount}
                    onChange = {event => setAmount(Number(event.target.value))}
                />
                <TransactionContainer>
                    <RadioBox
                        type = "button"
                        onClick  = {() => setType('deposit')}
                        isActive = {type ==='deposit'}
                        activeColor = "green" 
                    >
                        
                        <img src = {IncomeSvg} alt = "Entrada"></img>
                        <span>Entradas</span>

                    </RadioBox>

                    <RadioBox
                        type = "button"
                        onClick = {() => setType('withdraw')}
                        isActive = {type ==='withdraw'}
                        activeColor = "red" 
                    >

                        <img src = {OutcomeSvg} alt = "Saída"></img>
                        <span>Saídas</span>

                    </RadioBox>
                </TransactionContainer>
    
                <input 
                    placeholder = "Categoria"
                    value = {category}
                    onChange = {event => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>

        </Modal> 
    );

}