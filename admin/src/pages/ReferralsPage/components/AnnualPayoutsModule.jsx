import React from 'react';

import { Col, Row } from "antd";

import { referralsManagementSelector } from "../../../redux/selectors.js";
import { useAppSelector } from "../../../hooks/useAppSelector.js";
import { useInput } from "../../../hooks/useInput.js";

import InputGroup from "../../../components/inputGroup/inputGroup.jsx";

const AnnualPayoutsModule = () => {
  const { annualPayouts } = useAppSelector(referralsManagementSelector);

  const {
    firstGeneration,
    secondGeneration,
    thirdGeneration,
    fourthGeneration,
    fifthGeneration,
    sixthGeneration,
  } = annualPayouts;

  const firstGenerationInput = useInput(firstGeneration);
  const secondGenerationInput = useInput(secondGeneration);
  const thirdGenerationInput = useInput(thirdGeneration);
  const fourthGenerationInput = useInput(fourthGeneration);
  const fifthGenerationInput = useInput(fifthGeneration);
  const sixthGenerationInput = useInput(sixthGeneration);

  function saveValue() {
    console.log("saveValue");
  }

  return (
    <Col span={ 24 }>
      <h2>Годовые выплаты</h2>
      <Row gutter={ [36, 24] }>
        <Col xl={ 4 } md={ 8 } xs={ 12 }>
          <p>1 поколение</p>
          <InputGroup inputObj={ firstGenerationInput } type='input' saveValue={ saveValue } width={ 18 }/>
        </Col>
        <Col xl={ 4 } md={ 8 } xs={ 12 }>
          <p>2 поколение</p>
          <InputGroup inputObj={ secondGenerationInput } type='input' saveValue={ saveValue } width={ 18 } />
        </Col>
        <Col xl={ 4 } md={ 8 } xs={ 12 }>
          <p>3 поколение</p>
          <InputGroup inputObj={ thirdGenerationInput } type='input' saveValue={ saveValue } width={ 18 } />
        </Col>
        <Col xl={ 4 } md={ 8 } xs={ 12 }>
          <p>4 поколение</p>
          <InputGroup inputObj={ fourthGenerationInput } type='input' saveValue={ saveValue } width={ 18 } />
        </Col>
        <Col xl={ 4 } md={ 8 } xs={ 12 }>
          <p>5 поколение</p>
          <InputGroup inputObj={ fifthGenerationInput } type='input' saveValue={ saveValue } width={ 18 } />
        </Col>
        <Col xl={ 4 } md={ 8 } xs={ 12 }>
          <p>6 поколение</p>
          <InputGroup inputObj={ sixthGenerationInput } type='input' saveValue={ saveValue } width={ 18 } />
        </Col>
      </Row>
    </Col>
  );
};

export default AnnualPayoutsModule;
