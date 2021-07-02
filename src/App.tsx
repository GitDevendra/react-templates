import Styles from './appStyle.module.scss'
import Counter from './counter'
import codeIcon from './assets/images/code.svg'

const App = () => {
  return (
    <>
      <div className="wrapper">
        <h1 className={Styles.heading}>
          Hello! Dev Singh New <span> {process.env.NODE_ENV} </span>
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
