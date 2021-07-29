
import { useState } from 'react';
import { Header } from './components/Header';
import Modal from 'react-modal'
import {GlobalStyle} from './styles/global'
import { Dashboard } from './components/Dashboard';
import {NewTransactionsModal} from './components/NewTransactionsModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');
function App() {
  const [isNewTransactionModalOpen,setIsNewTranasctionModalOpen] = useState(false);
  function handleOpenNewTransactionModal() {
      setIsNewTranasctionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
      setIsNewTranasctionModalOpen(false)
  }    
  return (
    <TransactionsProvider>
      <Header openNewTransactionModal = {handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionsModal
        isOpen = {isNewTransactionModalOpen}
        onRequestClose = {handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;
