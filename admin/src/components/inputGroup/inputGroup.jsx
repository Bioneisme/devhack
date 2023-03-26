import React, { useState } from 'react';

import { Button, Col, Input, Row } from "antd";
import FeatherIcon from "feather-icons-react";
import ReactQuill from "react-quill";


const InputGroup = ({ inputObj, type, saveValue, width }) => {
  const [editStatus, setEditStatus] = useState(false);
  const { value, onChange, setValue } = inputObj;

  function handleEditStatus() {
    if (editStatus) saveValue();

    setEditStatus(!editStatus);
  }

  function renderInput() {
    return <Input
      disabled={ !editStatus }
      value={ value }
      onChange={ onChange }
    />;
  }

  function renderEditor() {
    if (editStatus) {
      return <ReactQuill
        theme='snow'
        value={ value }
        onChange={ setValue }
      />;
    }
    return renderInput();
  }

  return (
    <Row>
      <Col span={ width ? width : 20 }>
        { type === 'input' && renderInput() }
        { type === 'editor' && renderEditor() }
      </Col>
      <Col span={ 2 }>
        <Button type='primary' onClick={ handleEditStatus }>
          <FeatherIcon icon={ !editStatus ? 'edit' : 'check' } size={ 14 } />
        </Button>
      </Col>
    </Row>
  );
};

export default InputGroup;
