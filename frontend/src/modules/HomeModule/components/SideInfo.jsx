import React from "react";

import { Col, List, Row, Typography } from "antd";

import greenCircleIcon from "/icons/greenCircleIcon.svg";
import yellowCircleIcon from "/icons/yellowCircleIcon.svg";

const SideInfo = () => {
  const { Item } = List;
  const { Meta } = Item;
  const { Title } = Typography;

  const data = [
    {
      title: "Важные контакты:",
      icon: greenCircleIcon,
      content:
        <Row gutter={ [0, 12] }>
          <Col span={ 12 }>
            Сантехник
          </Col>
          <Col span={ 12 }>
            9:00-18:00
          </Col>
          <Col span={ 24 }>
            +7 (777) 777-77-77 <br /> <br />
          </Col>
          <Col span={ 12 }>
            Электрик
          </Col>
          <Col span={ 12 }>
            9:00-20:00
          </Col>
          <Col span={ 24 }>
            +7 (777) 777-77-77 <br /> <br />
          </Col>
          <Col span={ 24 }>
            Инцидент-менеджер
          </Col>
          <Col span={ 24 }>
            +7 (777) 777-77-77
          </Col>
        </Row>,
    },
    {
      title: "Напоминание:",
      icon: yellowCircleIcon,
      content: "Сбор денег на ремонт крыши закроется через 2 дня!",
    },
  ];

  return (
    <div className="side-info">
      <List
        itemLayout="horizontal"
        dataSource={ data }
        renderItem={ (item) => (
          <Item>
            <Meta
              avatar={ <img
                src={ item.icon }
                alt="list icon"
              /> }
              title={ item.title }
              description={ item.content }
            />
          </Item>
        ) }
      />
    </div>
  );
};

export default SideInfo;
