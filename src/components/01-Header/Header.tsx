import logo from '../../assets/logo2.svg'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <header className="HeaderColor">
      <div className="flex items-center justify-between max-w-[1120px] my-0 mx-auto pt-8 px-4 py-48">
        <img src={logo} alt="logo" />
        <button
          type="button"
          onClick={onOpenNewTransactionModal}
          className="text-base text-white bg-green py-0 px-8 rounded h-12 transition-all hover:bg-green/90"
        >
          Nova transação2
        </button>
      </div>
    </header>
  )
}
