
import './App.css'
import { Button } from './components/Button/Button'
import { ColoredParagraph } from './components/Text/ColoredParagraph'

function App() {


  return (
    <>
      <div>
        <ColoredParagraph texto={'testando parágrafo colorido'} color='#0beb4e' />
      </div>

      <Button label='Baixar CV' />
    </>


  )
}

export default App
