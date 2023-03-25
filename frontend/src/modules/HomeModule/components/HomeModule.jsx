import React from "react";

import { Col, Row, Typography } from "antd";
import SideInfo from "./SideInfo.jsx";

const HomeModule = () => {
  const { Title } = Typography;
  return (
    <section className="home">
      <Row justify="space-between">
        <Col
          span={ 13 }
          className="flex-center"
        >
          <Title>
            Заказывай услуги, оставляй заявки, просматривай финансовые отчеты в один миг
          </Title>
        </Col>
        <Col
          span={ 6 }
          className="flex-center"
        >
          <SideInfo />
        </Col>
      </Row>
    </section>
  );
};

export default HomeModule;
