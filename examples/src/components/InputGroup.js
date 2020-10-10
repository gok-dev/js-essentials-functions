import React from 'react'

import {
  FormGroup,
  Label,
  Col,
  Input,
} from 'reactstrap'

const InputGroup = ({
  label,
  otherLabel,
  type,
  name,
  id,
  maxLength,
  placeholder,
  onChange,
  value,
  secondFunc
}) => {
  return (
    <FormGroup row>
      <Label for={id} sm={2}>{label}</Label>
      <Col sm={10}>
        <Input
          type={type}
          name={name}
          id={id}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <Label className="label-show">
          {`${otherLabel} ${secondFunc}`}
        </Label>
      </Col>
    </FormGroup>
  )
}

export default InputGroup
