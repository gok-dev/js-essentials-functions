import React, { useState } from 'react'
import {
  cpfCnpjMask,
  cpfCnpjUnmask,
  cepMask,
  cepUnmask
} from 'js-functions-essentials'
import './App.css'

// Components
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
} from 'reactstrap'

import { InputGroup } from './components';

function App() {
  const [cpf, setCpf] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [cep, setCep] = useState('')

  return (
    <Container
      style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '50px 0',
      }}
    >
      <Card>
        <CardHeader>
          <h1>CPF and CNPJ Mask</h1>
        </CardHeader>
        <CardBody>
          <Form>
            <InputGroup
              label="CPF"
              type="text"
              name="cpf"
              id="cpf"
              maxLength={15}
              placeholder="Informe seu CPF"
              onChange={(e) => setCpf(e.target.value)}
              value={cpfCnpjMask(cpf)}
              otherLabel="Clear Mask:"
              secondFunc={cpfCnpjUnmask(cpf)}
            />
            <InputGroup
              label="CNPJ"
              type="text"
              name="cnpj"
              id="cnpj"
              maxLength={18}
              placeholder="Informe seu CNPJ"
              onChange={(e) => setCnpj(e.target.value)}
              value={cpfCnpjMask(cnpj)}
              otherLabel="Clear Mask:"
              secondFunc={cpfCnpjUnmask(cnpj)}
            />
          </Form>
        </CardBody>
      </Card>
      <hr />
      <Card>
        <CardHeader>
          <h1>CEP Mask</h1>
        </CardHeader>
        <CardBody>
          <Form>
            <InputGroup
              label="CEP"
              type="text"
              name="cep"
              id="cep"
              maxLength={9}
              placeholder="Informe seu CEP"
              onChange={(e) => setCep(e.target.value)}
              value={cepMask(cep)}
              otherLabel="Clear Mask:"
              secondFunc={cepUnmask(cep)}
            />
          </Form>
        </CardBody>
      </Card>
    </Container>
  )
}

export default App
