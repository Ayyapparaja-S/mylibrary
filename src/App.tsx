import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './theme/theme'
import Button from './components/button'

function App() {
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '20px' }}>
        <h1>MUI Button Component Demo</h1>
        <Button label="Primary Button" onClick={handleClick} />
        <Button label="Secondary Button" color="secondary" onClick={handleClick} style={{ marginLeft: '10px' }} />
        <Button label="Disabled Button" disabled style={{ marginLeft: '10px' }} />
      </div>
    </ThemeProvider>
  )
}

export default App
