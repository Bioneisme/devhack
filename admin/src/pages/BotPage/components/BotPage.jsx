import React, { useEffect } from 'react';

import { Main } from "../../pagesStyle.js";

import { getBotText } from "../../../redux/botManagement/actionCreator.js";
import { useAppDispatch } from "../../../hooks/useAppDispatch.js";

import { PageHeader } from '../../../components/pageHeaders/pageHeaders.jsx';
import { Cards } from '../../../components/cards/frame/cards-frame.jsx';
import BotCommandsModule from "./BotCommandsModule.jsx";

const BotPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBotText());
  }, [dispatch]);

  return (
    <>
      <PageHeader
        ghost
        title='Управление ботом'
      />
      <Main>
        <Cards headless>
          <div style={ { minHeight: 'calc(100vh - 300px)' } }>
            <BotCommandsModule />
          </div>
        </Cards>
      </Main>
    </>
  );
};

export default BotPage;
