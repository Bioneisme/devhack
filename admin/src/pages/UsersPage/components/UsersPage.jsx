import React from 'react';

import { Row } from "antd";

import { Main } from "../../pagesStyle.js";

import { PageHeader } from "../../../components/pageHeaders/pageHeaders.jsx";
import { Cards } from "../../../components/cards/frame/cards-frame.jsx";
import Loader from "../../../Loader.jsx";

const UsersPage = () => {
  const isFetching = false;
  return (
    <>
      <PageHeader
        ghost
        title='Управление пользователями'
      />
      <Main>
        <Cards headless>
          <div style={ { minHeight: 'calc(100vh - 300px)' } }>
            {
              !isFetching ?
                <Row gutter={ [0, 32] }>
                  UsersPage
                </Row>
                :
                <Loader />
            }
          </div>
        </Cards>
      </Main>
    </>
  );
};

export default UsersPage;
