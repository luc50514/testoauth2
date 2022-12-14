import React from 'react'
import Signup from './Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <Container 
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100hv" }}
        >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
  )
}

export default App;
