import React from "react";
import { Link } from "react-router-dom";

import { Button, Col, Row, Space, Typography } from "antd";

const GreetingModule = () => {
  const { Text, Title } = Typography;

  return (
    <section className="greeting">
      <Row gutter={ [0, 36] }>
        <Col
          span={ 24 }
          className="flex-center"
          style={ { gap: "9px" } }
        >
          <Title>Инцидент-менеджер для ОСИ </Title>
        </Col>
        <Col span={ 24 }>
          <Space>
            <Link to={ "/userRegister" }>
              <Button
                type="primary"
                className="custom-button"
              >
                Зарегистрироваться
              </Button>
            </Link>
          </Space>
        </Col>
        <Col span={ 24 }>
          <Text>
            Уже зарегистрированы? <Text strong><Link to={ "/userLogin" }>Войдите в аккаунт</Link></Text>
          </Text>
        </Col>
      </Row>
    </section>
  );
};

export default GreetingModule;
