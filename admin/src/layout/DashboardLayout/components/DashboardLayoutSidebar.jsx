import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { LayoutContext } from '../context/context.jsx';

const DashboardLayoutSidebar = () => {
  const { Sider } = Layout;
  const { layoutState } = useContext(LayoutContext);
  const { collapsed } = layoutState;
  const navigate = useNavigate();

  function getMenuItem(key, label, icon, children, onClick) {
    return {
      key, label, icon, children, onClick: () => key && navigate(key),
    }
  }

  const menuItems = [
    getMenuItem('/dev/', 'Главная', <FeatherIcon icon='home' />),
    getMenuItem('/dev/bot', 'Телеграм бот', <FeatherIcon icon='send' />),
    getMenuItem('/dev/users', 'Пользователи', <FeatherIcon icon='users' />),
    getMenuItem('/dev/referrals', 'Реферальная система', <FeatherIcon icon='percent' />),
    getMenuItem(null, 'Администраторы', <FeatherIcon icon='gitlab' />,
      [
        getMenuItem('/users/bioneisme', 'bioneisme', null),
        getMenuItem('/users/lagmazavr', 'lagmazavr', null),
        getMenuItem('/addAdmin', 'Добавить нового админа', null),
      ]
    ),
  ];

  const SideBarStyle = {
    margin: '63px 0 0 0',
    padding: '15px 15px 55px 15px',
    overflowY: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
    zIndex: 998,
    '::webkitScrollbar': {
      display: 'none'
    }
  };

  return (
    <Sider
      width={ 280 }
      style={ SideBarStyle }
      collapsed={ collapsed }
      theme={ 'light' }
    >
      <Scrollbars
        className='custom-scrollbar'
        autoHide
        autoHideTimeout={ 500 }
        autoHideDuration={ 200 }
      >
        <p className='sidebar-nav-title'>НАВИГАЦИЯ</p>

        <Menu mode='inline' items={ menuItems } />
      </Scrollbars>
    </Sider>
  );
};

export default DashboardLayoutSidebar;
