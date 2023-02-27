import { Header } from './components/01-Header/Header'
import { Dashboard } from './components/02-Dashboard/Dashboard'
import { NewTransactionModal } from './components/04-NewTransactionModal/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'
import './styles/global.css'
import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  )
}
