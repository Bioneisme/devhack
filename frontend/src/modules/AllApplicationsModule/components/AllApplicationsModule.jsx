import React from "react";

import { Col, Collapse, Row, Space, Typography } from "antd";

const AllApplicationsModule = () => {
  const { Title } = Typography;
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <section className="all-services">
      <Row gutter={[0, 24]}>
        <Col span={ 24 }>
          <Title>Заявки</Title>
        </Col>
        <Col span={ 24 }>
          <Space
            direction="vertical"
            className="all-services__accordion"
          >
            <Collapse collapsible="header" defaultActiveKey={['1']}>
              <Panel header="This panel can only be collapsed by clicking text" key="1">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Space>
        </Col>
      </Row>
    </section>
  );
};

export default AllApplicationsModule;
