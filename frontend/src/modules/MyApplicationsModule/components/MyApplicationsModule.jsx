import React, { useEffect, useState } from "react";

import { Col, Collapse, Row, Space, Spin, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

import API from "../../../api/index.js";
import CollapseTable from "./CollapseTable.jsx";

const MyApplicationsModule = () => {
  const [applications, setApplications] = useState([]);
  const { Title, Text } = Typography;
  const { Panel } = Collapse;

  useEffect(() => {

    async function getData() {
      const response = await API.get("applications/getMyApplications");
      console.log(response.data.applications);
      setApplications(response.data.applications);
    }

    getData();
  }, []);

  if (!applications) {
    return <Spin />;
  }


  if (applications.length === 0) {
    return <section className="all-applications">
      <Row gutter={ [0, 24] }>
        <Col span={ 24 }>
          <Title>Список заявок пуст</Title>
        </Col>
      </Row>
    </section>;
  }


  const historyApplications = applications.filter((application) => application.status === "Выполнено");
  const activeApplications = applications.filter((application) => application.status !== "Выполнено");

  return (
    <section className="all-applications">
      <Row gutter={ [0, 24] }>
        <Col span={ 24 }>
          <Title>Заявки</Title>
        </Col>
        <Col span={ 24 }>
          <Space
            direction="vertical"
            className="accordion"
          >
            <Collapse
              expandIcon={ ({ isActive }) => <CaretRightOutlined rotate={ isActive ? 90 : 0 } /> }
            >
              <Panel header="Мои заявки" key="1">
                { activeApplications.map((application, index) =>
                  <CollapseTable
                    application={ application }
                    index={ index }
                    applicationsLength={ activeApplications.length - 1 }
                    key={ index }
                  />
                ) }
              </Panel>
            </Collapse>
            <Collapse
              expandIcon={ ({ isActive }) => <CaretRightOutlined rotate={ isActive ? 90 : 0 } /> }
            >
              <Panel header="История" key="2">
                { historyApplications.map((application, index) =>
                  <CollapseTable
                    application={ application }
                    index={ index }
                    applicationsLength={ historyApplications.length - 1 }
                    key={ index } />
                ) }
              </Panel>
            </Collapse>
          </Space>
        </Col>
      </Row>
    </section>
  );
};

export default MyApplicationsModule;
