import React, { useEffect, useState } from "react";

import { Button, Col, Input, InputNumber, Modal, Row, Select, Space, Spin, Typography } from "antd";
import { selectData } from "../selectData.js";
import API from "../../../api/index.js";
import useInput from "../../../hooks/useInput.js";

const CreateApplicationModule = () => {
    const { Title } = Typography;
    const { TextArea } = Input;
    const [modalOpen, setModalOpen] = useState(false);

    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const title = useInput("");
    const description = useInput("");

    function onCategoryChange(value) {
      setCategory(value);
    }

    async function postData(title, description, price, category) {
      const response = await API.post("/applications/createApplication", {
        title: title.value,
        description: description.value,
        price: price,
        category: category,
        status: "На рассмотрении"
      });
      console.log(response.data.applications);
    }

    return (
      <>
        <section>
          <Row gutter={ [0, 24] }>
            <Col span={ 24 }>
              <Title level={ 3 }>
                Не нашли нужную услугу? <br />
                Тогда оставьте заявку и мы рассмотрим ее
              </Title>
            </Col>
            <Col span={ 24 }>
              <Button
                className="custom-button"
                type="primary"
                size="large"
                onClick={ () => setModalOpen(true) }
              >
                Оставить заявку
              </Button>
            </Col>
          </Row>
          <Modal
            centered
            open={ modalOpen }
            onOk={ () => setModalOpen(false) }
            onCancel={ () => setModalOpen(false) }
          >
            <Row gutter={ [0, 24] }>
              <Col span={ 24 }>
                <Space
                  direction="vertical"
                  size="middle"
                >
                  <Title level={ 4 }>В чем проблема?</Title>
                  <Input
                    placeholder="Прорвало трубу..."
                    { ...title }
                  />
                </Space>
              </Col>
              <Col span={ 24 }>
                <Space
                  direction="vertical"
                  size="middle"
                >
                  <Title level={ 4 }>В чем проблема?</Title>
                  <TextArea
                    rows={ 2 }
                    placeholder="Прорвало трубу в ванной комнате, вода течет. "
                    { ...description }
                  />
                </Space>
              </Col>
              <Col span={ 24 }>
                <Space
                  direction="vertical"
                  size="middle"
                >
                  <Title level={ 4 }>Выберите категорию</Title>
                  <Select
                    showSearch={ false }
                    placeholder="Выбрать"
                    optionFilterProp="children"
                    onChange={ onCategoryChange }
                    options={ selectData }
                  />
                </Space>
              </Col>
              <Col span={ 24 }>
                <Space
                  direction="vertical"
                  size="middle"
                >
                  <Title level={ 4 }>Какую цену можете предложить?</Title>
                  <InputNumber
                    value={ price }
                    onChange={ setPrice }
                  />
                </Space>
              </Col>
              <Col span={ 24 }>
                <Space
                  direction="vertical"
                  size="middle"
                  className="flex-center"
                >
                  <Button
                    className="custom-button"
                    type="primary"
                    size="large"
                    onClick={ () => postData(title, description, price, category) }
                  >
                    Подать заявку
                  </Button>
                </Space>
              </Col>
            </Row>
          </Modal>
        </section>
      </>
    );
  }
;

export default CreateApplicationModule;
