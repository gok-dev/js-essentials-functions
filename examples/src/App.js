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
            <FormGroup row>
              <Label for="cpf" sm={2}>
                CPF
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="cpf"
                  id="cpf"
                  maxLength={15}
                  placeholder="Informe seu CPF"
                  onChange={(e) => setCpf(e.target.value)}
                  value={cpfCnpjMask(cpf)}
                />
                <Label className="label-show">
                  Clear Mask: {cpfCnpjUnmask(cpf)}
                </Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="cnpj" sm={2}>
                CNPJ
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="cnpj"
                  id="cnpj"
                  maxLength={18}
                  placeholder="Informe seu CNPJ"
                  onChange={(e) => setCnpj(e.target.value)}
                  value={cpfCnpjMask(cnpj)}
                />
                <Label className="label-show">
                  Clear Mask: {cpfCnpjUnmask(cnpj)}
                </Label>
              </Col>
            </FormGroup>
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
            <FormGroup row>
              <Label for="cpf" sm={2}>
                CEP
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="cep"
                  id="cep"
                  maxLength={9}
                  placeholder="Informe seu CEP"
                  onChange={(e) => setCep(e.target.value)}
                  value={cepMask(cep)}
                />
                <Label className="label-show">
                  Clear Mask: {cepUnmask(cep)}
                </Label>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Container>
  )
}

export default App
