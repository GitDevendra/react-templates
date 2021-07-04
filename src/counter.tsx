import { useEffect, useState } from 'react'
import Styles from './counter.module.scss'

interface IProps {
  className: string
  name: string
}

const Counter: React.FunctionComponent<IProps> = ({ className, name }) => {
  const [counter, setCounter] = useState(0)
  const onclick = () => {
    setCounter(counter + 1)
  }
  useEffect(() => {
    window.document.title = `Counter ${counter} Set`
  }, [counter])
  return (
    <>
      <button className={` ${Styles.counter} ${className}`} onClick={onclick}>
        {name} {counter}
      </button>
    </>
  )
}

export default Counter
