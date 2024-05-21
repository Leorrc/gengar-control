import { useTransactions } from '../../hooks/useTransactions'

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

export function TransactionsTable() {
  const { transactions } = useTransactions()

  return (
    <div className="mt-16 overflow-x-auto">
      <table className="w-full border-separate border-spacing-x-0 border-spacing-y-2">
        <thead className="">
          <tr>
            <th className="text-textBody font-normal py-4 px-8 text-left leading-6">
              Título
            </th>
            <th className="text-textBody font-normal py-4 px-8 text-left leading-6">
              Valor
            </th>
            <th className="text-textBody font-normal py-4 px-8 text-left leading-6">
              Categoria
            </th>
            <th className="text-textBody font-normal py-4 px-8 text-left leading-6">
              Data
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td className="py-4 px-8 bg-shape rounded-l-lg text-textBody">
                {transaction.title}
              </td>
              <td
                className={`py-4 px-8 bg-shape  text-green ${transaction.type === 'deposit' ? 'type1' : ''
                  } ${transaction.type === 'withdraw' ? 'type2' : ''} `}
              >
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td className="py-4 px-8 bg-shape text-textBody">
                {transaction.category}
              </td>
              <td className="py-4 px-8 bg-shape rounded-r-lg text-textBody">
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
