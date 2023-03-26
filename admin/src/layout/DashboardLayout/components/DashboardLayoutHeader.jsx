import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Button, Col, Layout, Row } from 'antd';
import FeatherIcon from 'feather-icons-react';

import { SmallScreenAuthInfo, SmallScreenSearch } from '../style/style.js';
import { LayoutContext } from '../context/context.jsx';

import AuthInfo from '../../../components/utilities/auth-info/info.jsx';

import SidebarRightLogo from '../../../static/img/icon/right.svg';
import SidebarLeftLogo from '../../../static/img/icon/left.svg';

const DashboardLayoutHeader = () => {
  const { Header } = Layout;
  const { layoutState, handleCollapsed, handleSearchHide, handleHide } = useContext(LayoutContext);
  const { collapsed, hide, searchHide } = layoutState;

  return (
    <>
      <Header
        style={ {
          position: 'fixed',
          width: '100%',
          top: 0,
          left: 0,
          background: '#ffffff',
          padding: '0 20px',
          borderBottom: '1px solid #DADAFF'
        } }
      >
        <Row style={ { justifyContent: 'space-between' } }>
          <Col lg={ 5 } sm={ 6 } xs={ 12 } className='align-center-v navbar-brand'>
            <Button type='link' onClick={ handleCollapsed }>
              <img src={ collapsed ? SidebarRightLogo : SidebarLeftLogo } alt='menu' />
            </Button>
          </Col>

          <Col lg={ 14 } md={ 8 } sm={ 0 } xs={ 0 }>
            {/*<HeaderSearch />*/}
          </Col>

          <Col lg={ 5 } md={ 10 } sm={ 0 } xs={ 0 }>
            <AuthInfo />
          </Col>

          <Col md={ 0 } sm={ 18 } xs={ 12 }>
            <div className='mobile-action'>
              <Link className='btn-search' onClick={ handleSearchHide } to='#'>
                { searchHide ? <FeatherIcon icon='search' /> : <FeatherIcon icon='x' /> }
              </Link>
              <Link className='btn-auth' onClick={ handleHide } to='#'>
                <FeatherIcon icon='more-vertical' />
              </Link>
            </div>
          </Col>
        </Row>
      </Header>
      <div className='header-more'>
        <Row>
          <Col md={ 0 } sm={ 24 } xs={ 24 }>
            <div className='small-screen-headerRight'>
              <SmallScreenSearch hide={ searchHide }>
                {/*<HeaderSearch />*/}
              </SmallScreenSearch>
              <SmallScreenAuthInfo hide={ hide }>
                <AuthInfo />
              </SmallScreenAuthInfo>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashboardLayoutHeader;
