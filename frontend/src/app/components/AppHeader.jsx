import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Avatar, Button, Col, Layout, Row, Space, Typography } from "antd";

import { useAppSelector } from "../../hooks/useAppSelector.js";
import { useAppDispatch } from "../../hooks/useAppDispatch.js";
import { adminLogout, authSelector, userLogout } from "../../redux/index.js";

import companyIcon from "/icons/companyIcon.svg";
import logoutIcon from "/icons/logoutIcon.svg";

const AppHeader = () => {
  const { Header } = Layout;
  const { role } = useAppSelector(authSelector);
  const { Text } = Typography;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function getMenuItem(route, label) {
    return {
      route,
      label,
      onClick: () => route && navigate(route),
    }
  }

  function handleLogout() {
    switch (role) {
      case "admin":
        dispatch(adminLogout());
        break;
      case "user":
        dispatch(userLogout());
        break;
      default:
        console.log("Error: role is not defined");
        break;
    }
  }

  const menuItems = [
    getMenuItem("/", "Главная"),
    getMenuItem("/myApplications", "Мои заявки"),
    getMenuItem("/getServices", "Получить услугу"),
    getMenuItem("/reports", "Отчеты"),
  ];

  return (
    <Header>
      <Row
        justify="center"
        align="top"
      >
        <Col span={ 2 }>
          <Text style={ {fontSize: "3rem", fontFamily: "MontserratSemiBold, sans-serif"} }>
            13Lab<span style={{color: "red"}}>.</span>
          </Text>
        </Col>
        <Col span={ 20 } className="flex-center">
          { menuItems.map(item => (
            <Link
              style={ { fontSize: "2rem", marginRight: "5rem", color: "white" } }
              key={ item.route }
              to={ item.route }
            >
              { item.label }
            </Link>
          )) }
        </Col>
        <Col span={ 2 }>
          <Button
            className="custom-button"
            type="primary"
            shape="circle"
            icon={ <img
              src={ logoutIcon }
              alt="logout"
            /> }
            onClick={ handleLogout }
            style={ {
              padding: "28px"
            } }
            size="large"
          />
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
