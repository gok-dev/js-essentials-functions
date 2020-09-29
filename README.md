<h1 align="center">JS Functions Essentials</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=javascript&message=language&color=yellow&style=for-the-badge&logo=JAVASCRIPT"/>
  <img src="http://img.shields.io/static/v1?label=License&message=APACHE&color=green&style=for-the-badge"/>
  <!-- <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/> -->
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

<p align="center">This lib has some of the most used functions in every project, be it web, mobile or backend.</p>

### Code Climate

[![Maintainability](https://api.codeclimate.com/v1/badges/78a6c7732caf055076f3/maintainability)](https://codeclimate.com/github/JulioAugustoS/js-functions-essentials/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/78a6c7732caf055076f3/test_coverage)](https://codeclimate.com/github/JulioAugustoS/js-functions-essentials/test_coverage)

### Deep Code
[![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6Ikp1bGlvQXVndXN0b1MiLCJyZXBvMSI6ImpzLWZ1bmN0aW9ucy1lc3NlbnRpYWxzIiwiaW5jbHVkZUxpbnQiOmZhbHNlLCJhdXRob3JJZCI6MjI5MDMsImlhdCI6MTYwMTM5Njg4Nn0.6s6kv28wn0tROMYx0xxcWfHT-2dhXifnriXXZPW8HGE)](https://www.deepcode.ai/app/gh/JulioAugustoS/js-functions-essentials/_/dashboard?utm_content=gh%2FJulioAugustoS%2Fjs-functions-essentials)

## Install

if using npm:

```
$ npm install js-functions-essentials --save
```

if using yarn:

```
$ yarn add js-functions-essentials
```

## Available Functions

| name       | accept type | description |
| ---------- | ----------- | ----------- |
| cpfCnpjMask | `string` | Returns the masked CPF or CNPJ |
| cpfCnpjUnmask | `string` | Clears the CPF or CNPJ mask and returns a string |
| cepMask | `string` | Return the masked CEP |
| cepUnmask | `string` | Clear the CEP mask and return a string |

## Usage with React

```jsx
import React, { useState } from 'react';
import { cpfCnpjMask } from 'js-functions-essentials'

function App() {
  const [cpf, setCpf] = useState('');

  return (
    <form>
      <input 
        name="cpf"
        type="text"
        maxLength={11}
        onChange={(e) => setCpf(e.target.value)}
        value={cpfCnpjMask(cpf)}
      />
    </form>
  );
}

```

## Usage with React Native

```jsx
import React, { useState } from 'react';
impot { View, TextInput } from 'react-native';
import { cpfCnpjMask } from 'js-functions-essentials'

function App() {
  const [cpf, setCpf] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <TextInput 
        onChangeText={(e) => setCpf(e)}
        value={cpfCnpjMask(cpf)}
      />
    </View>
  );
}

```

### Developers

| [<img src="https://avatars0.githubusercontent.com/u/39813875?s=460&v=4" width=115 > <br> <sub> Julio Augusto </sub>](https://github.com/JulioAugustoS) 
| :----------------------------------------------------------------------------------------------------------------------------------------------------: 


## Licença

The [MIT License]() (APACHE)
