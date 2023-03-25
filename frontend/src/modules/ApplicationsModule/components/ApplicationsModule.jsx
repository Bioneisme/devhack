import React, { useEffect, useState } from "react";

import { Col, Collapse, Divider, Row, Space, Spin, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import moment from "moment";

import API from "../../../api/index.js";
import CollapseTables from "./CollapseTables.jsx";

const ApplicationsModule = () => {
  const [applications, setApplications] = useState([]);
  const { Title } = Typography;
  const { Panel } = Collapse;

  useEffect(() => {

    async function getData() {
      const response = await API.get("applications/getMyApplications");
      console.log(response.data.applications);
      setApplications(response.data.applications);
    }

    getData();
  }, []);

  if (applications.length === 0) {
    return <Spin />;
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
            className="all-applications__accordion"
          >
            <Collapse
              expandIcon={ ({ isActive }) => <CaretRightOutlined rotate={ isActive ? 90 : 0 } /> }
            >
              <Panel header="Мои заявки" key="1">
                { activeApplications.map((application, index) =>
                  <CollapseTables
                    application={ application }
                    index={ index }
                    applicationsLength={ activeApplications.length - 1 }
                    key={ index }
                  />
                ) }
              </Panel>
            </Collapse>
            <Collapse
              defaultActiveKey={ ["2"] }
              expandIcon={ ({ isActive }) => <CaretRightOutlined rotate={ isActive ? 90 : 0 } /> }
            >
              <Panel header="История" key="2">
                { historyApplications.map((application, index) =>
                  <CollapseTables
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

export default ApplicationsModule;
