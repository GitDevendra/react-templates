import { useEffect, useState } from 'react'
import Styles from './appStyle.module.scss'

const App: React.FunctionComponent = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setList(json))
  }, [])
  console.log(list)
  return (
    <>
      <div className={`${Styles.container}`}>
        <ul>
          {list.map((item: any) => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
