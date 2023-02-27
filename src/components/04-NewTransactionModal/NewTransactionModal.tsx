import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import {
  TransactionsContext,
  useTransactions
} from '../../hooks/useTransactions'
import { api } from '../../services/api'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="absolute right-6 top-6 border-[0] bg-transparent hover:transition-all hover:brightness-90 "
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Close Modal" />
      </button>
      <form onSubmit={handleCreateNewTransaction}>
        <h2 className="text-titles text-[1.5rem] mb-8">Nova transação</h2>

        <input
          className="w-full py-0 px-6 h-16 rounded bg-place2 text-place font-normal text-[1rem]"
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          className="mt-4 w-full py-0 px-6 h-16 rounded  bg-place2 text-place font-normal text-[1rem] "
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        <input
          className="mt-4 w-full py-0 px-6 h-16 rounded bg-place2 text-place font-normal text-[1rem] "
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <div className="my-4 mx-0 grid grid-cols-2 gap-2 ">
          <button
            type="button"
            onClick={() => {
              setType('deposit')
            }}
            className={`h-16 border-[1px] border-solid border-transparent rounded bg-shape flex items-center justify-center hover:transition hover:border-greenDark 
            ${type === 'deposit' ? 'active1' : ''} `}
          >
            <img className="w-5 h-5" src={incomeImg} alt="Entrada" />
            <span className="inline-block ml-4 text-[1rem] text-titles ">
              Entrada
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setType('withdraw')
            }}
            className={`h-16 rounded border-[1px] border-solid border-transparent bg-shape flex items-center justify-center hover:transition hover:border-red ${
              type === 'withdraw' ? 'active2' : ''
            } `}
          >
            <img className="w-5 h-5" src={outcomeImg} alt="Entrada" />
            <span className="inline-block ml-4 text-[1rem] text-titles ">
              Saída
            </span>
          </button>
        </div>
        <button
          className="w-full py-0 px-6 h-16 bg-green text-[#FFF] rounded border-0 text-[1rem] mt-6 hover:transition-all hover:brightness-90  font-semibold"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </Modal>
  )
}
