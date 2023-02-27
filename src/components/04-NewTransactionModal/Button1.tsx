import { useEffect, useState } from 'react'
import incomeImg from '../../assets/income.svg'

export function Button1() {
  const [toogle, setToogle] = useState(false)
  const [cor, setCor] = useState('#F3F4F7')

  useEffect(() => {
    setCor(state => (toogle ? '#015F43' : ''))
  }, [toogle])

  return (
    <button
      type="button"
      onClick={e => setToogle(state => !state)}
      style={{
        background: cor
      }}
      className="h-16 border-[1px] border-solid border-transparent rounded bg-shape flex items-center justify-center hover:transition hover:border-greenDark "
    >
      <img className="w-5 h-5" src={incomeImg} alt="Entrada" />
      <span className="inline-block ml-4 text-[1rem] text-titles ">
        Entrada
      </span>
    </button>
  )
}
