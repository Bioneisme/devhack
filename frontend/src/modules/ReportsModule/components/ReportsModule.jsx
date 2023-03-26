import React from "react";

import { Col, List, Row, Space, Typography } from "antd";

import ProgressBar from "./ProgressBar.jsx";

const ReportsModule = () => {
  const { Text, Title } = Typography;
  const { Item } = List;
  const data = [
    "Ремонт обществнных зон.",
    "Ремонт систем центрального отопления.",
    "Замена трубопроводной системы.",
    "Проверка канализационной системы.",
  ];

  return (
    <section className="reports">
      <Row justify="space-between" style={ { width: "90vw" } }>
        <Col span={ 12 }>
          <Row gutter={ [0, 24] }>
            <Col span={ 24 }>
              <Title level={ 3 }>
                Активные
              </Title>
            </Col>
            <Col span={ 24 }>
              <Space
                direction="vertical"
                size="middle"
              >
                <Title level={4}>Ремонт крыши</Title>
                <ProgressBar value={ 40000 } maxValue={ 100000 } />
                <Title level={4}>Ремонт площадки</Title>
                <ProgressBar value={ 20000 } maxValue={ 30000 } />
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={ 12 }>
          <Row gutter={ [0, 24] }>
            <Col span={ 24 }>
              <Title level={ 3 }>
                Отчеты по выполненным работам со взносов
              </Title>
            </Col>
            <Col span={ 24 }>
              <Space
                direction="vertical"
                size="large"
              >
                <List
                  dataSource={data}
                  renderItem={(item) => (
                    <Item>
                      <Text>—</Text> {item}
                    </Item>
                  )}
                />
              </Space>
            </Col>
          </Row>

        </Col>
      </Row>
    </section>
  );
};

export default ReportsModule;
