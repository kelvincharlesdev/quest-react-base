
import './App.css'
import { Button } from './components/Button/Button'
import { ColoredParagraph } from './components/Text/ColoredParagraph'

function App() {
  const showAlertLabel = (label) => {
    alert(`A label desse botão é: ${label}`)
  }

  return (
    <>
      <div>
        <ColoredParagraph texto={'testando parágrafo colorido'} color='#0beb4e' />
      </div>

      <Button label='Baixar CV' onClick={showAlertLabel} />
    </>
  )
}

export default App
