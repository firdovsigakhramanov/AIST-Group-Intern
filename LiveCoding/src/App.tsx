import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [state, setState] = useState(123456)

  return (
    <>
      <button onClick={() => setState((state) => state + 1)}>
        <a href={`https://portal.login.gov.az/grant-permission?client_id=fb541713acd54641b4e24b3724ca811e&redirect_uri=http://localhost:5901&response_type=code&state=${state}&scope=openid certificate session`}>Asan Giriş</a>
      </button >
    </>
  )
}

export default App
