import React, { useState, useEffect } from 'react'
import {
  cpfCnpjMask,
  cpfCnpjUnmask,
  cepMask,
  cepUnmask,
  dateMask,
  dateMaskUS,

} from 'js-essentials-functions'
import './App.css'

// Components
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Form
} from 'reactstrap'

import { InputGroup } from './components';

function App() {
  const [cpf, setCpf] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [cep, setCep] = useState('')
  const [datePt, setDatePt] = useState('')
  const [dateEn, setDateEn] = useState('')
  const [language, setLanguage] = useState('ptbr')

  const content = {
    ptbr: {
      selectLanguage: "Selecione seu idioma",
      cpfCnpjMask: {
        title: 'Máscara de CPF e CPF',
        placeholderCPF: 'Informe seu CPF',
        placeholderCNPJ: 'Informe seu CNPJ',
        otherLabel: 'Limpar máscara'
      },
      cepMask: {
        title: 'Máscara CEP',
        placeholder: 'Informe seu CEP',
        otherLabel: 'Limpar máscara'
      },
      dateMask: {
        title: "Máscara de Data",
        labelPtBr: 'Data PT-BR',
        otherLabelPtBr: 'Padrão brasileiro: DD/MM/YYYY',
        labelEn: 'Data EN-US',
        otherLabelEn: 'Padrão americano: YYYY-MM-DD',
        placeholder: 'Informe uma Data',
      }
    },
    en: {
      selectLanguage: "Select your language",
      cpfCnpjMask: {
        title: 'CPF e CPF Mask',
        placeholderCPF: 'Your CPF',
        placeholderCNPJ: 'Your CNPJ',
        otherLabel: 'Clear mask'
      },
      cepMask: {
        title: 'CEP Mask',
        placeholder: 'Your CEP',
        otherLabel: 'Clear mask'
      },
      dateMask: {
        title: "Date Mask",
        labelPtBr: 'Date PT-BR',
        otherLabelPtBr: 'Brazilian format: DD/MM/YYYY',
        labelEn: 'Date EN-US',
        otherLabelEn: 'American format: YYYY-MM-DD',
        placeholder: 'Date',
      }
    },
  }

  const handleLanguageSelection = (lang) => {
    localStorage.setItem('@JsEssentialsFunctionsLanguage', lang);
    setLanguage(lang)
  }

  useEffect(() => {
    const storageLanguage = localStorage.getItem('@JsEssentialsFunctionsLanguage');

    if(storageLanguage && storageLanguage === 'en') {
      handleLanguageSelection('en')
    } else {
      handleLanguageSelection('ptbr')
    }
  }, [])


  return (
    <Container
      style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '50px 0',
      }}
    >
      <div className="selectLanguage">
        <span>{content[language].selectLanguage}: </span>
        <button onClick={() => handleLanguageSelection('ptbr')}>
          <span role="img" aria-label="Brandeira do Brasil">🇧🇷</span>
        </button>
        <span> / </span>
        <button onClick={() => handleLanguageSelection('en')}>
          <span role="img" aria-label="United States flag">🇺🇸</span>
        </button>
      </div>
      <Card>
        <CardHeader>
          <h1>{content[language].cpfCnpjMask.title}</h1>
        </CardHeader>
        <CardBody>
          <Form>
            <InputGroup
              label="CPF"
              type="text"
              name="cpf"
              id="cpf"
              maxLength={15}
              placeholder={content[language].cpfCnpjMask.placeholderCPF}
              onChange={(e) => setCpf(e.target.value)}
              value={cpfCnpjMask(cpf)}
              otherLabel={`${content[language].cpfCnpjMask.otherLabel}:`}
              secondFunc={cpfCnpjUnmask(cpf)}
            />
            <InputGroup
              label="CNPJ"
              type="text"
              name="cnpj"
              id="cnpj"
              maxLength={18}
              placeholder={content[language].cpfCnpjMask.placeholderCNPJ}
              onChange={(e) => setCnpj(e.target.value)}
              value={cpfCnpjMask(cnpj)}
              otherLabel={`${content[language].cpfCnpjMask.otherLabel}:`}
              secondFunc={cpfCnpjUnmask(cnpj)}
            />
          </Form>
        </CardBody>
      </Card>
      <hr />
      <Card>
        <CardHeader>
        <h1>{content[language].cepMask.title}</h1>
        </CardHeader>
        <CardBody>
          <Form>
            <InputGroup
              label="CEP"
              type="text"
              name="cep"
              id="cep"
              maxLength={9}
              placeholder={content[language].cepMask.placeholder}
              onChange={(e) => setCep(e.target.value)}
              value={cepMask(cep)}
              otherLabel={content[language].cepMask.otherLabel}
              secondFunc={cepUnmask(cep)}
            />
          </Form>
        </CardBody>
      </Card>
      <hr />
      <Card>
        <CardHeader>
          <h1>{content[language].dateMask.title}</h1>
        </CardHeader>
        <CardBody>
          <Form>
            <InputGroup
              label={content[language].dateMask.labelPtBr}
              type="text"
              name="date-br"
              id="date-br"
              maxLength={10}
              placeholder={content[language].dateMask.placeholder}
              onChange={(e) => setDatePt(e.target.value)}
              value={dateMask(datePt)}
              otherLabel={content[language].dateMask.otherLabelPtBr}
            />
            <InputGroup
              label={content[language].dateMask.labelEn}
              type="text"
              name="date-en"
              id="date-en"
              maxLength={10}
              placeholder={content[language].dateMask.placeholder}
              onChange={(e) => setDateEn(e.target.value)}
              value={dateMaskUS(dateEn)}
              otherLabel={content[language].dateMask.otherLabelEn}
            />
          </Form>
        </CardBody>
      </Card>
      <hr />
      <Card>
        <CardHeader>
          <h1>GET AGE</h1>
        </CardHeader>
        <CardBody>
          <Form>
            <InputGroup
              label="BIRTHDAY"
              type="text"
              name="birthday"
              id="birthday"
              maxLength={10}
              placeholder="Informe a data de nascimento"
              onChange={(e) => setDatePt(e.target.value)}
              value={dateMask(datePt)}
              otherLabel={`Age: `}
              secondFunc={'21'}
            />
          </Form>
        </CardBody>
      </Card>
    </Container>
  )
}

export default App
