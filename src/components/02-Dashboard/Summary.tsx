import { useTransactions } from '../../hooks/useTransactions'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0
    }
  )

  return (
    <div className="grid grid-cols-3 gap-8 -mt-40">
      <div className="bg-shape2 py-6 px-8 rounded ">
        <header className="flex items-center justify-between">
          <p className="text-titles">Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong className="block mt-4 font-medium text-4xl text-white">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>

      <div className="bg-shape2 py-6 px-8 rounded">
        <header className="flex items-center justify-between">
          <p className="text-titles">Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong className="block mt-4 font-medium text-4xl text-white">
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="bg-green py-6 px-8 rounded text-white">
        <header className="flex items-center justify-between">
          <p className="text-titles">Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong className="block mt-4 font-medium text-4xl ">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </div>
  )
}
