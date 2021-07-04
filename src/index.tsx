import ReactDom from 'react-dom'
import './style.scss'
import App from './App'

const applyStyle = {
  margin: '20px auto',
}

ReactDom.render(<App style={applyStyle} />, document.getElementById('root'))
