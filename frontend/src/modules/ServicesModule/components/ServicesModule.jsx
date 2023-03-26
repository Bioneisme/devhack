import React, { useEffect, useState } from "react";

import { Button, Col, Collapse, Input, InputNumber, Modal, Row, Select, Space, Spin, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

import API from "../../../api/index.js";

import CollapseTable from "./CollapseTable.jsx";
import TextArea from "antd/es/input/TextArea.js";
import { selectData } from "../../CreateApplicationModule/selectData.js";

const ServicesModule = () => {
  const { Title } = Typography;
  const { Panel } = Collapse;

  const [services, setServices] = useState({});


  useEffect(() => {
    async function getData() {
      const response = await API.get("/services/getFilteredServices");
      console.log(response.data.services);
      setServices(response.data.services);
    }

    getData();
  }, []);

  if (services.length === 0) return <Spin />;

  return (
    <section>
      <Row gutter={ [0, 24] }>
        <Col span={ 24 }>
          <Title>
            Виды услуг
          </Title>
        </Col>
        <Col span={ 24 }>
          <Space
            direction="vertical"
            className="accordion"
          >
            {
              Object.keys(services).map((key, index) => {
                return (
                  <Collapse
                    expandIcon={ ({ isActive }) => <CaretRightOutlined rotate={ isActive ? 90 : 0 } /> }
                    key={ index }
                  >
                    <Panel header={ key } key={ index }>
                      {
                        services[key].map((service, index) => {
                          return (
                            <CollapseTable
                              service={ service }
                              index={ index }
                              servicesLength={ services[key].length - 1 }
                              key={ index }
                              category={ key }
                            />
                          );
                        })
                      }
                    </Panel>
                  </Collapse>
                );
              })
            }
          </Space>
        </Col>
      </Row>
    </section>
  );
};

export default ServicesModule;
