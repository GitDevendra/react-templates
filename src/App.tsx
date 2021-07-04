import React from 'react'
import Styles from './app.module.scss'
import Counter from './counter'

import codeIcon from './assets/images/code.svg'

interface IProps {
  style: React.CSSProperties
}

const App: React.FunctionComponent<IProps> = ({ style }) => {
  return (
    <>
      <div className="wrapper" style={style}>
        <h1 className={Styles.heading}>
          Nothing to commit <span> {process.env.NODE_ENV} </span>
          {process.env.name}
          <br />
          <img src={codeIcon} alt="code" width="200" />
          <br />
          <Counter className={Styles.counter} name="Click Me" />
        </h1>
      </div>
    </>
  )
}

export default App
