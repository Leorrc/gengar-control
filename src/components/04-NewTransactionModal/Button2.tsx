import { useEffect, useState } from 'react'
import outcomeImg from '../../assets/outcome.svg'

export function Button2() {
  const [toogle, setToogle] = useState(false)
  const [cor, setCor] = useState('')

  useEffect(() => {
    setCor(state => (toogle ? '#F75A68' : ''))
  }, [toogle])

  return (
    <button
      type="button"
      onClick={e => setToogle(state => !state)}
      style={{
        backgroundColor: cor
      }}
      className="h-16 rounded border-[1px] border-solid border-transparent bg-shape flex items-center justify-center hover:transition hover:border-red "
    >
      <img className="w-5 h-5" src={outcomeImg} alt="Entrada" />
      <span className="inline-block ml-4 text-[1rem] text-titles ">Saída</span>
    </button>
  )
}
