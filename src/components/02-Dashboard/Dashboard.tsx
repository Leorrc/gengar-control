import { TransactionsTable } from '../03-TransactionsTable/TransactionsTable'
import { Summary } from './Summary'

export function Dashboard() {
  return (
    <main className="max-w-[1120px] my-0 mx-auto py-10 px-4">
      <Summary />
      <TransactionsTable />
    </main>
  )
}
