<h1 align="center">JS Essentials Functions</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=typescript&message=language&color=blue&style=for-the-badge&logo=TYPESCRIPT"/>
  <img src="http://img.shields.io/static/v1?label=License&message=APACHE&color=green&style=for-the-badge"/>
  <!-- <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/> -->
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

<p align="center">This lib has some of the most used functions in every project, be it web, mobile or backend.</p>

### Package Informations

[![npm](https://img.shields.io/npm/v/js-essentials-functions.svg?label=npm%20package)](https://www.npmjs.com/package/js-essentials-functions)
[![npm](https://img.shields.io/npm/dt/js-essentials-functions.svg)](https://www.npmjs.com/package/js-essentials-functions)
[![GitHub issues](https://img.shields.io/github/issues-raw/gok-dev/js-essentials-functions.svg)](https://github.com/gok-dev/js-essentials-functions/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/gok-dev/js-essentials-functions.svg)](https://github.com/gok-dev/js-essentials-functions/commits/master)

### Code Climate

[![Maintainability](https://api.codeclimate.com/v1/badges/037642c2fcf1fef7b23c/maintainability)](https://codeclimate.com/github/gok-dev/js-essentials-functions/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/037642c2fcf1fef7b23c/test_coverage)](https://codeclimate.com/github/gok-dev/js-essentials-functions/test_coverage)

### Deep Code

[![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6Ikp1bGlvQXVndXN0b1MiLCJyZXBvMSI6ImpzLWZ1bmN0aW9ucy1lc3NlbnRpYWxzIiwiaW5jbHVkZUxpbnQiOmZhbHNlLCJhdXRob3JJZCI6MjI5MDMsImlhdCI6MTYwMTM5Njg4Nn0.6s6kv28wn0tROMYx0xxcWfHT-2dhXifnriXXZPW8HGE)](https://www.deepcode.ai/app/gh/JulioAugustoS/js-functions-essentials/_/dashboard?utm_content=gh%2FJulioAugustoS%2Fjs-functions-essentials)

## Install

if using npm:

```
$ npm install js-functions-essentials --save
```

if using yarn:

```
$ yarn add js-essentials-functions
```

## Available Functions

| name          | accept type | description                                      |
| ------------- | ----------- | ------------------------------------------------ |
| cpfCnpjMask   | `string`    | Returns the masked CPF or CNPJ                   |
| cpfCnpjUnmask | `string`    | Clears the CPF or CNPJ mask and returns a string |
| cepMask       | `string`    | Return the masked CEP                            |
| cepUnmask     | `string`    | Clear the CEP mask and return a string           |
| telephoneMask | `string`    | Return the masked telephone                      |
| telephoneUnmask | `string`  | Clear the telephone mask and return a string   |
| dateMask      | `string`    | Return the masked date in pt-br format           |
| dateMaskUS    | `string`    | Return the masked date in en-us format           |

## Usage with React

```jsx
import React, { useState } from 'react'
import { cpfCnpjMask } from 'js-functions-essentials'

function App() {
  const [cpf, setCpf] = useState('')

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
  )
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

<!-- CONTRIBUTING -->

## Contribution

Contributions are what make the open source community an incredible place to learn, inspire and create. Any contribution you make will be **much appreciated**.

1. Fork the project
2. Create a Branch for your Feature (`git checkout -b feature/newFeature`)
3. Add your changes (`git add .`)
4. Commit your changes (`git commit -m 'Add new feature!`)
5. Push the Branch (`git push origin feature/newFeature`)
6. Open a Pull Request

### Developers

| [<img src="https://avatars0.githubusercontent.com/u/39813875?s=460&v=4" width=115 > <br> <sub> Julio Augusto </sub>](https://github.com/JulioAugustoS)
| :----------------------------------------------------------------------------------------------------------------------------------------------------:

## Licença

The [Apache 2.0]() (APACHE 2.0)
