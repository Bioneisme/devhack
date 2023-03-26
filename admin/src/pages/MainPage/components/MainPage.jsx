import React from 'react';

import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';

import { Main } from "../../pagesStyle.js";

import { Cards } from '../../../components/cards/frame/cards-frame.jsx';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button.jsx';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button.jsx';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button.jsx';
import { PageHeader } from '../../../components/pageHeaders/pageHeaders.jsx';
import { Button } from '../../../components/buttons/buttons.jsx';

import UsersByLevel from './charts/UsersByLevel.jsx';

const MainPage = () => {
  return (
    <>
      <PageHeader
        ghost
        title='Sample Page'
        buttons={ [
          <div key='6' className='page-header-actions'>
            <CalendarButtonPageHeader key='1' />
            <ExportButtonPageHeader key='2' />
            <ShareButtonPageHeader key='3' />
            <Button size='small' key='4' type='primary'>
              <FeatherIcon icon='plus' size={ 14 } />
              Add New
            </Button>
          </div>,
        ] }
      />
      <Main>
        <Row gutter={ 25 }>
          <Col lg={ 24 } xs={ 24 }>
            <Cards headless>
              <div style={ { minHeight: 'calc(100vh - 320px)' } }>
                <h2>Welcome to StrikingDash</h2>
                <Col xl={ 8 } md={ 12 } xs={ 24 }>
                  <UsersByLevel />
                </Col>
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default MainPage;
