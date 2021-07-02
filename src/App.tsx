import Styles from './appStyle.module.scss'
import Counter from './counter'

const App = () => {
  return (
    <>
      <div className="wrapper">
        <h1 className={Styles.heading}>
          Hello! dev! {process.env.NODE_ENV} {process.env.name}
          <br />
          <Counter className={Styles.counter} />
        </h1>
      </div>
    </>
  )
}

export default App
