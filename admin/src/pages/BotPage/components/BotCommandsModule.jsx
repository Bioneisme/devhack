import React from 'react';

import { Col, Row } from "antd";

import { patchBotText } from "../../../redux/botManagement/actionCreator.js";
import { botManagementSelector } from "../../../redux/selectors.js";
import { useAppSelector } from "../../../hooks/useAppSelector.js";
import { useInput } from "../../../hooks/useInput.js";
import { useAppDispatch } from "../../../hooks/useAppDispatch.js";

import InputGroup from "../../../components/inputGroup/inputGroup.jsx";
import Loader from "../../../Loader.jsx";

const BotCommandsModule = () => {
  const dispatch = useAppDispatch();
  const {
    textCommandsRussian,
    textCommandsEnglish,
    buttonCommandsRussian,
    buttonCommandsEnglish,
    sharePostRussian,
    sharePostEnglish,
    isFetching,
  } = useAppSelector(botManagementSelector);

  const textCommandsRussianInput = useInput(textCommandsRussian);
  const textCommandsEnglishInput = useInput(textCommandsEnglish);
  const buttonCommandsRussianInput = useInput(buttonCommandsRussian);
  const buttonCommandsEnglishInput = useInput(buttonCommandsEnglish);
  const sharePostRussianInput = useInput(sharePostRussian);
  const sharePostEnglishInput = useInput(sharePostEnglish);

  function saveValue() {
    dispatch(
      patchBotText(
        textCommandsRussianInput.value,
        textCommandsEnglishInput.value,
        buttonCommandsRussianInput.value,
        buttonCommandsEnglishInput.value,
        sharePostRussianInput.value,
        sharePostEnglishInput.value,
      )
    );
  }

  // if (isFetching) {
  //   return <Loader />;
  // }

  return (
    <Row gutter={ [12, 36] }>
      <Col xl={ 12 } md={ 12 } xs={ 24 }>
        <h2>Текстовые команды (на русском)</h2>
        <InputGroup inputObj={ textCommandsRussianInput } type='editor' saveValue={ saveValue } />
      </Col>
      <Col xl={ 12 } md={ 12 } xs={ 24 }>
        <h2>Текстовые команды (на английском)</h2>
        <InputGroup inputObj={ textCommandsEnglishInput } type='editor' saveValue={ saveValue } />
      </Col>
      <Col xl={ 12 } md={ 12 } xs={ 24 }>
        <h2>Кнопочные команды (на русском)</h2>
        <InputGroup inputObj={ buttonCommandsRussianInput } type='editor' saveValue={ saveValue } />
      </Col>
      <Col xl={ 12 } md={ 12 } xs={ 24 }>
        <h2>Кнопочные команды (на английском)</h2>
        <InputGroup inputObj={ buttonCommandsEnglishInput } type='editor' saveValue={ saveValue } />
      </Col>
      <Col xl={ 12 } md={ 12 } xs={ 24 }>
        <h2>Переслать пост (на русском)</h2>
        <InputGroup inputObj={ sharePostRussianInput } type='input' saveValue={ saveValue } />
      </Col>
      <Col xl={ 12 } md={ 12 } xs={ 24 }>
        <h2>Переслать пост (на английском)</h2>
        <InputGroup inputObj={ sharePostEnglishInput } type='input' saveValue={ saveValue } />
      </Col>
    </Row>
  );
};

export default BotCommandsModule;
